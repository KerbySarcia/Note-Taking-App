const noteContainer = document.querySelector('.notes')
const inputText = document.getElementById('input-text')
const saveBtn = document.querySelector('.save-btn')

// For Modal
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const updateBtn = document.querySelector('.save-btn-modal')
const deleteBtn = document.querySelector('.delete-btn-modal')
const inputTextModal = document.getElementById('input-text-modal')


let text = ''

function noteTakingApp()
{
    if(inputText.textContent == '')
    {
        saveBtn.disabled = true
        saveBtn.style.opacity = '50%'
    }

    inputText.addEventListener('click', ()=>{
        saveBtn.disabled = false
        saveBtn.style.opacity = '100%'
    })

    saveBtn.addEventListener('click', createNote)
    updateBtn.addEventListener('click',updateNote)
    deleteBtn.addEventListener('click',deleteNote)

}

function createNote()
{
    if(inputText.value == '')
    {
        alert('Input Something Bro!')
    }
    else{
        const note = document.createElement('div')
        note.className = 'note'
        note.addEventListener('click', e => showModal(e))

        const p = document.createElement('p')
        p.className = 'words'
        p.textContent = inputText.value
        inputText.value = ''

        note.appendChild(p)

        noteContainer.appendChild(note)
        saveBtn.disabled = true
        saveBtn.style.opacity = '50%'
    }
}

function showModal(e)
{
    text = e.currentTarget
    inputTextModal.value = text.firstElementChild.textContent
    modalContainer.classList.add('show-modal')
}

function updateNote()
{
    text.firstElementChild.textContent = inputTextModal.value
    modalContainer.classList.remove('show-modal')
}

function deleteNote()
{
    text.remove()
    modalContainer.classList.remove('show-modal')
}


noteTakingApp()