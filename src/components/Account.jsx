const Account = ({ detail }) => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  return (
    <div className='bank-info'>
      <div>
        <p className='kind'>
          Argent Bank {detail.kind} (x{detail.nb})
        </p>
        <p className='money-available'>
          ${Number(detail.available).toLocaleString('en', options)}
        </p>
        <p className='type'>{detail.type}</p>
      </div>
      <button className='button-profil'>View transactions</button>
    </div>
  )
}

export default Account
