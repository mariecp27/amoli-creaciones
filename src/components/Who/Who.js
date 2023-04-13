import React from 'react'

const Who = () => {
    return (
        <div className='who'>
            <h3>¿Quiénes somos?</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue ligula et ante fermentum vehicula. Sed elementum, est id ullamcorper efficitur, turpis augue sodales lorem, et sollicitudin mauris augue ut erat. Pellentesque et elit ligula. Donec elementum rutrum enim id gravida. In quis consectetur sapien. Proin quis urna non odio mollis pharetra et a urna. In laoreet molestie consequat. Nunc quis aliquam libero. Nunc tempor lectus et vestibulum porta. Ut in elit rutrum, tristique risus vel, ultrices sem.
            </p>
            <img src={process.env.PUBLIC_URL + "/assets/images/form.png"} alt="Form" className="" />
        </div>
    )
}

export default Who;