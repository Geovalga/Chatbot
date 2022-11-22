import { logoBot } from './icons';

const trainingPhrases = require('./data/data-patterns.json');
const data_responses = require('./data/data-responses.json');

export default function App() {
  // <------------------------- functions.js

  // -------------------------> functions.js



  // <------------------------- index.js

  // -------------------------> index.js



  return (
    <div className="App">
      <div className="card d-flex flex-column vh-100 overflow-hidden">
				<div className="card-body" style={{overflowY:"scroll"}} id="content-chat-feed">
          <div className="containerbot">
          <img src={logoBot} alt="Avatar" style={{width:"100%"}} />
          <div className="row">
            <div className='col-sm-8 pt-4'>Hi, selamat datang :)</div>
            <div className='col-sm-4 pt-4'><span className='time-right'>98.99%<br />11:00 PM</span></div>
          </div>
        </div>
				</div> 
				<div className="card-footer"> 
					<div className="input-group">
						<input type="text" className="form-control" id="input-chat" />
						<div className="input-group-append">
							<button className="btn btn-primary" type="button">Send</button>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}
