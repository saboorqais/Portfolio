import React from 'react'
import { Data } from '../../Data/Data'
import RecentWork from './RecentWork'

function RecentWorkWrapper() {
  return (
    <>
       {Data.map(({ title, link, tag,index }) => (
                        <RecentWork
                          key={index}
                          
                            title={title}
                            link={link}
                            tag={tag}
                        />
                    ))}
    </>
  )
}

export default RecentWorkWrapper