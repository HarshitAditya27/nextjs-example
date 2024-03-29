import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import mainstyles from '../styles/index.module.css'

export default function Home() {
  return (
    <div className={mainstyles.landingMain}>
      <Head>
        <meta charset="UTF-8" />
        <title>SAWO NEXT.JS SAMPLE APP</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainstyles.landingMain}>
        <header>
          <div className={mainstyles.container}>
            <div className={mainstyles.nav_m}>
              <div className={mainstyles.nav}>
                <nav
                  className="nav_m nav navbar navbar-expand-lg navbar-light primary-menu"
                >
                  <Link href="/" >
                    <div className={mainstyles.navbarbrand}>
                      <Image
                        className={mainstyles.navbar_logo}
                        src="/logo.jpg"
                        height={80}
                        width={80} />
                    </div>
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                    onClick="onToggle()">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar_nav ml-auto d-flex justify-content-between">

                      <span className="d-flex">
                        <div className="nav-link active styling__nav__link">
                          <Link href="/" >
                            Home
                          </Link>
                        </div>
                        <div className="nav-link active styling__nav__link">
                          <Link href="/" >  Pricing  </Link>
                        </div>
                        <div className="nav-link active styling__nav__link">
                          <Link href="/" >  Docs  </Link>
                        </div>
                        <div className="nav-link active styling__nav__link">
                          <Link href="/" >
                            Resources
                          </Link>
                        </div>
                        <div className="nav-link active styling__nav__link">
                          <Link href="/" >
                            Contact Us
                          </Link>
                        </div>
                      </span>
                      <span>
                        <Link href="/login">
                          <div className="btn btn-warning">
                            <i className="fa fa-sign-in" aria-hidden="true">Login </i>
                          </div>
                        </Link>
                      </span>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <main className={mainstyles.main}>
          <div className={mainstyles.heading}>
            <h1>Product Headline</h1>
            <div className={mainstyles.cta}>
              <button className="btn btn-lg btn-warning mt-3 cta">
                <span>Call To Action</span>
              </button>
            </div>
          </div>
          <div className={mainstyles.feature_cards}>
            <div className="feature_cards row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card mb-4 mx-auto">
                  <div className="card-body">
                    <h5 className="card-title">Feature 1</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                    <div className="btn btn-warning">
                      <Link href="/" className="btn btn-warning"> Go somewhere </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card mb-4 mx-auto">
                  <div className="card-body">
                    <h5 className="card-title">Feature 2</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                    <div className="btn btn-warning">
                      <Link href="/" className="btn btn-warning"> Go somewhere </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="card mb-4 mx-auto">
                  <div className="card-body">
                    <h5 className="card-title">Feature 3</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                    <div className="btn btn-warning">
                      <Link href="/" >  Go somewhere</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer />
      </div >

    </div >


  )
}
