type TypeClassName = {
    dialogsContainer: string
    dialogsItems: string
    dialog: string
    message: string
    messageContainer: string
}
type x = { //типизация объекта, который приходит в пропсах из APP
    styleDialogs: TypeClassName
}

function Dialogs(props: x) {
    return (
        <div className={props.styleDialogs.dialogsContainer}>
            <div className={props.styleDialogs.dialogsItems}>
                <div className={props.styleDialogs.dialog}>Ира</div>
                <div className={props.styleDialogs.dialog}>Катя</div>
                <div className={props.styleDialogs.dialog}>Света</div>
                <div className={props.styleDialogs.dialog}>Валера</div>
            </div>
            <div className={props.styleDialogs.messageContainer}>
                <div className={props.styleDialogs.message}>hi</div>
                <div className={props.styleDialogs.message}>4o kavo?</div>
                <div className={props.styleDialogs.message}>whhhhhhaaaaaaaaaaa</div>
            </div>
        </div>
    )
}

export default Dialogs