import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


function MyComp(props) {
  return <h1>my comp {props.name}</h1>
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>My Web Site</header>
      </div>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props); // 常に呼び出す。
    this.state = {date:new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
        date: new Date(),
    });
  }

  render () {
    return (
      <div>
        <h1>Clock Component</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

function Form() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('Clicked');
    }}>
      <button type="submit">submit!!</button>
    </form>
  )
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn?'ON':'OFF'}
      </button>
    )
  }
}

function Greeting(props) {
  const isLoggdIn = props.isLoggdIn;
  if (isLoggdIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function UserGreeting(props) {
    return (
      <h1>hello, user1</h1>
    )
}

function GuestGreeting(props) {
    return (
      <h1>hello, Guest</h1>
    )
}

class Base extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <h1>hello,component {this.props.name}</h1>
          <MyComp name="emily"></MyComp>
          <Form />
          <Toggle />
          <Greeting isLoggdIn={true} />
          <Clock />
        </div>
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Base name="my component"/>);