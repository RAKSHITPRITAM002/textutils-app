export default function Alert(props: { alert: { type: string; msg: string } | null | undefined }) {
const capitalize = (word: string) => {
const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase()+lower.slice(1)
}
  
  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </div>
  )
}
