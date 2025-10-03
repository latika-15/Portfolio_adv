

export default function Header() {
  return (
    <header className="head">

      {/* Navigation */}
      <nav className="nav">
        <a href="#home">Home</a>
        
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
       
      </nav>

      {/* Intro Section */}
      <div className="intro">
        <div className="text">
          <h1 className="hii">Hii,<br />I am Latika Tewari!</h1>
          <p className="first">First Glance Says It All...</p>
          <p className="second">Because Second Chances Are Rare!</p>
        </div>
         <img src={new URL("../assets/profile.png", import.meta.url)} alt="profile" className="profile-img" />
        </div>
   

    </header>
  );
}
