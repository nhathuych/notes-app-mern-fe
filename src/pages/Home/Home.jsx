import React, { useEffect, useState } from 'react'
import NoteCard from '../../components/NoteCard/NoteCard'
import AddEditNotes from './AddEditNotes'
import { MdAdd } from 'react-icons/md'
import Modal from 'react-modal'
import axiosInstance from '../../ultils/axiosInstance'
import { API_URLS } from '../../ultils/constants'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Toast from '../../components/Toast/Toast'

function Home() {
  const [editNotesModal, setEditNotesModal] = useState({
    isShown: false,
    type: 'add',
    data: null
  })

  const [toast, setToast] = useState({
    isShown: false,
    type: 'add',
    message: ''
  })

  const [userInfo, setUserInfo] = useState(null)
  const [allNotes, setAllNotes] = useState()
  const navigate = useNavigate()

  const showToastMessage = (message, type) => {
    setToast({ isShown: true, type, message })
  }

  const handleCloseToast = () => {
    setToast({ isShown: false, message: '' })
  }

  const handleEditNote = (note) => {
    setEditNotesModal({ isShown: true, type: 'edit', data: note })
  }

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.get_user)
      if (response?.data?.data) {
        setUserInfo(response.data.data)
      }
    } catch(error) {
      if (error.response.error) {
        localStorage.clear()
        navigate('/login')
      }
    }
  }

  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.all_notes)

      if (response?.data?.data) {
        setAllNotes(response.data.data)
      }
    } catch(error) {
      console.log(error)
    }
  }

  const deleteNote = async (note) => {
    const result = confirm('Want to delete ?')
    if (!result) return

    try {
      const noteId = note._id.toString()
      const response = await axiosInstance.delete(API_URLS.delete_note + noteId)

      if (response.status == 200) {
        showToastMessage('Note deleted successfull.', 'delete')
        getAllNotes()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toggleNotePinned = async (note) => {
    try {
      const noteId = note._id.toString()
      const response = await axiosInstance.put(API_URLS.toggle_note_pinned + noteId, { isPinned: !note.isPinned })

      if (response.status == 200) {
        showToastMessage('Note pinned successfull.', 'delete')
        getAllNotes()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserInfo()
    getAllNotes()
  }, [])

  return (
    <div>
      <Navbar userInfo={userInfo} />

      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          {allNotes?.map((note, index) => (
            <NoteCard
              key={note._id}
              title={note.title}
              date={note.createdAt}
              content={note.content}
              tags={note.tags}
              isPinned={note.isPinned}
              onEdit={() => handleEditNote(note)}
              onDelete={() => {deleteNote(note)}}
              onPinNote={() => {toggleNotePinned(note)}}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setEditNotesModal({ isShown: true, type: 'add', data: null })
        }}
        className='flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10 w-16 h-16'
      >
        <MdAdd className='text-white text-3xl'/>
      </button>

      <Modal
        isOpen={editNotesModal.isShown}
        appElement={document.getElementById('root')}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.2)'
          }
        }}
        contentLabel=''
        className='bg-white rounded-md mx-auto w-[40%] max-h-3/4 mt-14 p-5'
      >
        <AddEditNotes
          type={editNotesModal.type}
          noteData={editNotesModal.data}
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
          onCloseModal={() => {
            setEditNotesModal({isShown: false, type: 'add', data: null})
          }}
        />
      </Modal>

      <Toast
        isShown={toast.isShown}
        type={toast.type}
        message={toast.message}
        onClose={handleCloseToast}
      />
    </div>
  )
}

export default Home
