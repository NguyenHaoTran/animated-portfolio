import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
        <div className="textContainer">
            <h1>Lets work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>hello@react.dev</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>HCM cty, VietNam</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>+94 123456</span>
            </div>
        </div>
        <div className="formContainer">
            <form action="">
                <input type="text" required placeholder="Name" />
                <input type="email" required placeholder="Email" />
                <textarea rows={8} placeholder="massage"></textarea>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact