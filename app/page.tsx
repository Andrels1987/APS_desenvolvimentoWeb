'use client'
import { GameContext } from "@/contexts/GameContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useContext, useState , useEffect} from "react";

export default function Home() {
  const { life, QandA, setLife, score, setScore } = useContext(GameContext);
  let [item, setItem] = useState(0);
  let [userAnswer, setUserAnswer] = useState("");

  useEffect(()=>{
    const handleWindow = () =>{
      window.addEventListener('resize', () =>{
        let menu = document.querySelector("#mobile-menu")! as HTMLElement;
        if(menu != null){
          let width = window.innerWidth;
          if(width > 640){      
              menu.style.display = "none";          }
        }});
      }
    handleWindow();

      return () => window.removeEventListener("resize", handleWindow);
  }, [])
  //
  const openMenu = () => {
    let menu = document.querySelector("#mobile-menu")! as HTMLElement;
    let menuAtrr = getComputedStyle(menu);
    //console.log(menuAtrr.display);
    menuAtrr.display == "none"
      ? (menu.style.display = "block")
      : (menu.style.display = "none");
  };
//compara a resposta do usuario com a resposta correta
  const checkAnswer = function () {
    let rightAnswer = QandA[item].rightAnswer;
    if (userAnswer == rightAnswer) {
      console.log("Answer is correct");
      setScore((score: number) => score + 10);
    } else {
      setLife((life: any) => life - 1);
    }
    setItem(item => item + 1);
    let answer = document.querySelectorAll<HTMLElement>('.answers');
      answer.forEach(element => {
        let styles = getComputedStyle(element, "::after");
        element.style.setProperty('--largura', '5px')               
      });
  };

  //insere os icones de vida no header - CORAÇÕES
  const setLifes = (level: any) => {
    let content = [];
    for (let i = 0; i < level; i++) {
      content.push(<FontAwesomeIcon key={i} className="faicons" icon={faHeart} />);
    }
    return content;
  };

  //close menu click
  const closeMenuClick = () => {
    let menu = document.querySelector("#mobile-menu")! as HTMLElement;
    menu.style.display = "none";  
  }

  //esconder menu
 

    const handleUserAnswer = (event:any) =>{
      let answer = document.querySelectorAll<HTMLElement>('.answers');
      answer.forEach(element => {
        let styles = getComputedStyle(element, "::after");
        element.style.setProperty('--largura', '5px')               
      });

      let target = event.target;  
      let styles = getComputedStyle(target, "::after");
      target.style.setProperty('--largura', '100%')
      
      setUserAnswer(target.innerText);
    }
  return (
    <>
      <nav className="bg-gray-800 z-10-relative ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={openMenu}
                type="button"
                id="openMenu"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="  flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <div>{setLifes(life)}</div>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                  </button>
                </div>

                <div
                  id="profile-menu"
                  className="absolute right-0 z-10  mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu" id="mobile-menu">
          <div className=" space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
      <div className="score">{score}</div>
      <div
      onClick={closeMenuClick}
        style={{
          height: "100vh",
          background: "#F9F3BC",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {life > 0 ? 
            item < QandA.length ? (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg "
                style={{
                  height: "60%",
                  width: "93%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFFFFF",
                  position: "absolute",
                  top: "25%",
                  zIndex: "1",
                }}
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-green-500 text-4xl question">
                    {QandA[item].question} ?
                  </div>
                  <div className="font-bold text-xl mb-2 ">
                    {QandA[item].answers.map((a: any) => 
                       (
                        <div key={a.id} className="answers" onClick={(ev) =>handleUserAnswer(ev)}>
                          <p                            
                            className="text-gray-700 text-base text-green-700 py-4" 
                            style={{padding : "0"}}                           
                            >
                            {a.answer}
                          </p>
                          </div>
                      )
                    )}
                  </div>
                </div>
              </div>
        ) : (
          <div
            style={{
              height: "50%",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F3DB97",
              position: "absolute",
              top: "25%",
            }}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-yellow-600">
                <h1>PEGUTAS FINALIZADAS</h1>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              height: "50%",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F3DB97",
              position: "absolute",
              top: "25%",
            }}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-yellow-600">
                <h1>Sem vidas</h1>
              </div>
            </div>
          </div>
        )}

        <button
          style={{
            position: "absolute",
            top: "88%",
          }}
          onClick={checkAnswer}
          className={`${QandA.length == item ? "disabled bg-gray-500" : "bg-blue-500 "} text-white font-bold py-2 px-4 rounded-full `}
        >
          Responder
        </button>
      </div>
    </>
  );
}
