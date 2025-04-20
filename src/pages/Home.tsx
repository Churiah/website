import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <h1 className="display-4 fw-bold">Hi, I'm Minh Chủ</h1>
                    <p className="lead">I'm a passionate developer who loves building clean and efficient code.</p>
                    <Link to="about" className="btn btn-lg btn-custom mt-3">About Me</Link>
                </div>
            </section>
            <section id="projects" className="py-5">
                <div className="container">
                    <h2 className="mb-4 text-center">Projects</h2>
                    <div className="row">

                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Project One</h5>
                                    <p className="card-text">Short description of your project goes here.</p>
                                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Project One</h5>
                                    <p className="card-text">Short description of your project goes here.</p>
                                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Project One</h5>
                                    <p className="card-text">Short description of your project goes here.</p>
                                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <footer className="text-center py-4 mt-5 bg-light">
                <p className="mb-1">© 2025 Your Name</p>
                <p>
                    <a href="mailto:you@example.com">you@example.com</a> |
                    <a href="https://github.com/yourusername" target="_blank">GitHub</a> |
                    <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
                </p>
            </footer>
        </div>
    )
}

export default Home