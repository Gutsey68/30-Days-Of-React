export default function Subscribe() {
  return (
    <div className="subscribe">
      <h1>SUBSCRIBE</h1>
      <p>Sign up width your email adress to receive news and updates</p>
      <div className="inputs">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="email" />
      </div>
      <button className="btn-subscribe">Subscribe</button>
    </div>
  );
}
