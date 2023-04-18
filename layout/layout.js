import React ,{ useState,useEffect }from "react";
import "./layout.css";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShapes, faShare } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import img1 from './img.jpeg';

 export function Layout(){
  const[profile,setProfile]=useState([]);
    useEffect(()=>{
        fetch('/product.json') 
        .then(data=>data.json())
        .then(da=>setProfile(da))
    })
  
    return(
        <>  
     <div className="container-fluid bg-navimg">
        <nav class="navbar navbar-expand-lg navbar-light bg-light bg-trans">
            {/* <a class="navbar-brand" href="#">image</a> */}
            <img src={img1} className="img-nav"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item"><button class="btn btn-nav my-2 my-sm-0" type="submit">Find Candidates</button></li>
                <li class="nav-item"><a class="nav-link" href="#">Find Jobs</a></li>
                <li class="nav-item"><a class="nav-link">Find Companies</a></li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="btn btn-outline-light my-2 my-sm-0 mx-lg-2" type="button" value="login"/>
                <button class="btn btn-nav my-2 my-sm-0 mx-lg-2" type="submit">Search</button>
            </form>
            </div>
        </nav>
        <div className="container py-5">
            <h1 className="text-center text-col pt-lg-5 pb-lg-3">Find the candidates as per your requirements</h1>
            <div className="cent pb-lg-5">
                <div className="row bg-light p-2 justify-content-center w-75 bord">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="p-2 siz"/>
                    <input class="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Job Title / Keyword"/>
                    <FontAwesomeIcon icon={faLocationDot}  className="p-2 siz"/>
                    <input class="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Add Country / City"/>
                    <button class="btn btn-nav my-2 px-5 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </div>
        </div>
        <div className="container row">

         <div class="dropdown col-2">
          <button class="btn btn-drop1 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
           Experience
           </button>
          <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
           </div>
        </div>

        <div class="dropdown col-2">
  <button class="btn btn-drop1 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
 Html/Css
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<div class="dropdown col-2">
  <button class="btn btn-drop1 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
   Banglore
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
 
<div class="dropdown col-2">
  <button class="btn btn-drop1 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
    Ui/Ux Designer
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<div class="dropdown col-2">
  <button class="btn btn-drop1 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
  Gender
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<div class="dropdown col-2">
  <button class="btn btn-drop1 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
   Age
  </button>
  <div class="dropdown-menu ">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>


{profile.map((value,index)=>
                <>
            <div className="p-5 col-lg-3 ">
                <div className="card justify-content-around btn-drop">
                    <img src={value.image} className="card-img-top cardimg"/>
                    <FontAwesomeIcon icon={faBookmark} className="bookmark"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">{value.position}</p>
                        <a href="#" className="btn btn-nav">VIEW</a>
                    </div>
                </div>        
            </div>
            </>)
            }
</div>



  </>
    );
}