export default function loading({ val }) {

  return(
    <div style={{display: 'flex', height: '100vh', alignItems: 'center'}}>
      <div className='progress' style={{flex: 1}}>
        <div className='progress-bar progress-bar-striped bg-success' role='progressbar' style={{width: `${val}%`}} aria-valuenow={val.toString()} aria-valuemin='0' aria-valuemax='100'>{val}%</div>
      </div>  
    </div>
  );
}
