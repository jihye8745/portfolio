import React, {useState, useEffect} from 'react'
import Put from './Put'
import Btns from './Btns'
import List from './List'

const TodoList = () => {

  // <개념> 보여지는 데이트를 담는 공간 >> useState

  // 1. 할일 목록을 담아두는 공간 만들기
  // 할일이  todos 에 담기고 초기값은 빈배열 [ ]로 설정 / setTodos 함수로 현재 상태를 반영하게 함
  const [todos, setTodos] = useState([])
  //  -> todos는 Put 컴포넌트의 input 창에 입력되는 것이 todos가 됨

  // 8. 할일 목록 추가 함수 만들기
  const addTodo = (inputValue)=>{
    // Put 컴포넌트에서 실행되는 addTodo에서 inputValue를 매개변수로 받아옴

    // 받아온 inputValue를 객체에 새로 담아야함
    // id는 그 순간의 시간값으로 설정(중북 안됨) / inpuValue 값 / 완료여부 : false
    const newtodo = {id: Date.now(), inputValue, completed: false}

    // setTodos 함수로 할일목록 업데이트
    // 기존에 목록들이 있으면 우선 복사해서  넣고 / newtodo를 이어서 넣는다.
    setTodos([...todos, newtodo]);
  }
  // console.log("todos :", todos);


  // 9. 필터링값 담아두기
  const [filter, setFilter] = useState('all')
  console.log(filter)

  // 10. 필터링된 todos 함수
  // todos 중에서 조건에 맞는 것만 걸러 새로운 배열 만들기
  const filterTodo = todos.filter((todo)=>{
    // filter 가 active 면 완료여부가 false인 건 만 가져오고
    if (filter === "active") return !todo.completed
    // filter 가 completed 이면 완료여부가 true인 것만 가져오고
    if (filter === "completed") return todo.completed
    // 둘다 아니면(all) 다 가져와라
    return true;
  })

  // 11. 완료된 항목 전체 삭제 함수
  const clear = ()=>{
    // todos 중에 완료여부가 false 인것만 가져옴 >> 할일 목록에 담음
    setTodos(todos.filter(todo => !todo.completed))
  }

  // 12. Item 체크 박스 체크 여부에 따라 진행중 / 완료 상태 바꾸는 함수
  const toggleTodo = (id)=>{

    setTodos(todos.map(todo=>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
    
  }

  // 13. Item  X버튼 클릭 실행되는 개별 삭제 함수
  const delet = (id)=>{
    // 삭제할 todo의 id와 다른 todo들만 남겨둠
    setTodos(todos.filter(todo => todo.id !== id))
    
  }

  // 14. useEffect 사용해서 목록 저장 가능
  /*
  localStorage : 웹 브라우저에 저장할 수 있는 공간
  단 문자열만 저장 가능
  */

  useEffect(()=>{
    const save = JSON.parse(localStorage.getItem('todos')) || []
    // JSON.parse() >> 문자열을 배열/객체 형태로 전환
    setTodos(save)
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    // localStorage.setItem('이름',문자열) >> 문자열을 이름으로 저장
    // JSON.stringify(배열) >> 배열을 문자열로 변환
  }, [todos])


  return (
    <div>
      {/* 할일입력 */}
      {/* 9. 할일 추가 함수를 전달해주기 */}
      <Put addTodo={addTodo}/>

      {/* 할일 상태 버튼 */}
      {/* filter(필터링값)와 setFilter(필터링 함수)를 넘겨줌 */}
      <Btns filter={filter} setFilter={setFilter} clear={clear}/>

      {/* 할일 리스트 */}
      <List filterTodo={filterTodo} toggleTodo={toggleTodo} delet={delet}/>
    </div>
  )
}

export default TodoList
