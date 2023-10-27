import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CMS() {

  const params = useParams('ID')
  const navigate = useNavigate()

  return (
    <div className='admin-panel'>
        PanelAdmin
    </div>
  )
}

export default CMS