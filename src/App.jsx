//import { useState } from 'react';
import Employees from './functionComponent/employess.jsx';
import UserCard from './functionComponent/userCard.jsx';  
import Form from './functionComponent/Form.jsx';
import './App.css';
import EventPlanner from './activity1/EventPlanner.jsx';
import TodoList from './activity2/TodoList.jsx';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import FetchData from './activity3/FetchData.jsx';
import FetchYogaData from './activity3/FetchYogaData.jsx';
import FeedbackForm from './activity3/FeedBackForm.jsx';
import CanditedProfile from './functionComponent/CanditedProfile.jsx';
import ListPosts from './redux/listPosts.jsx';


function App() {
 // const [count, setCount] = useState(0);

  // user list with array with object passing as props to the function component
  // const users = [
  //   { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "rk", age: 20, country: "USA" },
  //   { pic :"./boyimg.jpg",name: "rk", age: 20, country: "USA" },
  //   { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "rk", age: 20, country: "USA" },
  //   { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "rk", age: 20, country: "USA" },
  //   { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "kumar", age: 25, country: "Canada" },
  //   { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "rajesh", age: 30, country: "UK" }
  // ];

  //form action example

  

  return (
    <>
      {/* <h1>welcome to the site</h1>
      <p>This is a demo application.</p>
      <p>Count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count + 2)}>double Increment</button>
      <Employees employees="this is props example" />
      <Employees name="John Doe" age={20} country="USA" />

      <h2>user list</h2>
      {users.map((user, index) => (
        <UserCard 
          key={index}
          name={user.name}
          imag={user.pic}
          age={user.age}
          country={user.country}
        />
      ))}
    <Form /> */}
    
    
    <BrowserRouter>
       <nav className='navbar'>
         <NavLink to="/" className='nav-link' replace>EventPlanner</NavLink> |{" "}
         <NavLink to="/todo" className='nav-link' replace>todo</NavLink> |{" "}
         <NavLink to='/form' className='nav-link' replace>form</NavLink>
         <NavLink to='/fruit' className='nav-link' replace>fruitdata</NavLink>
         <NavLink to='/yoga' className='nav-link' replace>yoga</NavLink>
         <NavLink to='/feed' className='nav-link' replace>feed</NavLink>
         <NavLink to='/candited' className='nav-link' replace>CanditedProfile</NavLink>
         <NavLink to='/posts' className='nav-link' replace>rtkPost</NavLink>
               </nav>
      
       <Routes>
         <Route path="/" element={<EventPlanner />} />
         <Route path='/todo' element={<TodoList/>}/>
         <Route path='/form' element={<Form/>}/>
         <Route path='/fruit' element={<FetchData/>}/>
         <Route path='/yoga' element={<FetchYogaData/>}/>
         <Route path='/feed' element={<FeedbackForm/>}/>
         <Route path="*" element={<h2>404: Page Not Found</h2>} />
         <Route path="/candited" element={<CanditedProfile/>} />
         <Route path="/posts" element={<ListPosts/>} />
         
         

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

// import React from 'react'
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import Home from './functionComponent/Home.jsx';
// import About from './functionComponent/About.jsx';
// import './App.css';
// import UserCard from './functionComponent/userCard.jsx';

// export default function App() {
//  const users = [
//     { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "rk", age: 20, country: "USA" },
//     { pic :"./boyimg.jpg",name: "rk", age: 20, country: "USA" },
//     { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "rk", age: 20, country: "USA" },
//     { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "rk", age: 20, country: "USA" },
//     { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "kumar", age: 25, country: "Canada" },
//     { pic :"https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383431.jpg",name: "rajesh", age: 30, country: "UK" }
//   ];
 
//   return (
//     <>
//     <BrowserRouter>
//       <nav className='navbar'>
//         <NavLink to="/" className='nav-link'>Home</NavLink> |{" "}
//         <NavLink to="/about" className='nav-link'>About</NavLink> |{" "}

        
//       </nav>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<h2>404: Page Not Found</h2>} />
//         <Route path="/users" element={<UserCard users={users} />} />
//         <Route path="*" element={<h2>404: Page Not Found</h2>} />
        
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }