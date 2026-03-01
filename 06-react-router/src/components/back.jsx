import React from "react"

const Back = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 from-blue-50 via-white to-purple-50" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
    </div>
  )
}

export default Back
