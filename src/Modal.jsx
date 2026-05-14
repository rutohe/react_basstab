function Modal({IsOpen,setIsOpen}) {
  return (
    <>
        {IsOpen && <div 
                className="overlay"
                onClick={()=>{
                    setIsOpen(false)
                }}
            >
            <div
                className="modal-content"
                onClick={(e)=>{e.stopPropagation()}}
            >
            </div>
            <button 
                    type="button"
                    className="submit-btn"
                    onClick={()=>{
                        setIsOpen(false)
                    }}
                >
                    submit this score
                </button>
        </div>}
    </>
  )
}
export default Modal