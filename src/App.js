import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Post Generator</h1>
      <div className='row'>
        {/* create form */}
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>Create Post</div>
            <div className='card-body'>
              <form>
                {/* name */}
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Enter Name' /><br />

                {/* greeting */}
                <label htmlFor='greeting'>Greeting: </label>
                <input type='text' id='greeting' placeholder='Enter Greeting' /><br />

                {/* msg */}
                <label htmlFor='msg'>Message: </label>
                <input type='text' id='msg' placeholder='Enter Message' /><br />
              </form>
            </div>
          </div>
        </div>
        {/* preview */}
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>Preview</div>
            <div className='card-body'>
              <div className='preview'>
                <h2>Eid Mubarak!</h2>
                <p>Message</p>
                <h4>Vocab</h4>
              </div>
              <button>Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
