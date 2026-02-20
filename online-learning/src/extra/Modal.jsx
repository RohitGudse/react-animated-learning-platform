export default function mOdal({ children, close }) {
    return (
        <div className="modal">
            <div className="box">
                <button onClick={close}>X</button>
                {children}
            </div>
        </div>
    )
}