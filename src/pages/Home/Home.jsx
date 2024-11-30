import React, { useState } from 'react'
import NoteCard from '../../components/NoteCard/NoteCard'
import AddEditNotes from './AddEditNotes'
import { MdAdd } from 'react-icons/md'
import Modal from 'react-modal'

function Home() {
  const [editNotesModal, setEditNotesModal] = useState({
    isShown: false,
    type: 'add',
    data: null
  })

  return (
    <div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard
            title='Learn reactjs'
            date='1rd Oct 2024'
            content='Do Notes app using MEARN...'
            tags='#learning'
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
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
          noteData={editNotesModal.noteData}
          onCloseModal={() => {
            setEditNotesModal({isShown: false, type: 'add', data: null})
          }}
        />
      </Modal>

    </div>
  )
}

export default Home
