const Account = ({ detail }) => {
  return (
    <div className='bank-info'>
      <div className='money'>
        <p className='kind'>{detail.kind}$</p>
        <p className='money'>{detail.nb}</p>
        <p className='type'>{detail.available}</p>
        <p className='type'>{detail.type}</p>
      </div>
      <button className='transactions-button'>View transactions</button>
    </div>
  )
}

export default Account
