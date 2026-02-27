step 1: install react-router-dom 
step 2: wrap app with <BrowswerRouter>

step 3: create pages comp (about, contact)

step 4: Define Routes
                <Routes>
                    <Route path="/hello" element={<h1>hello this is hello route</h1>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
step 5 : add navigation Link 
            <Link to="/about">About</Link> ||
            <Link to="/multi">InlineCss</Link>