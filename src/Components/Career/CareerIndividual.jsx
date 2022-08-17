import React from 'react'


function CareerIndividual() {
  return (
    <>
      <div className="container-fluid py-5" style={{backgroundColor:"#ebebeb"}} >
        
            {/* title */}
        <div className="container d-flex justify-content-between job-title pb-5 pt-3">
            <h1>Software Engineer</h1>
            <button>Apply Now</button>
        </div>

        <div className="container d-flex">
            <div className="col-8 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat iure quidem fugit dolor saepe? Magni recusandae debitis quod culpa cupiditate quis, sequi tempore corrupti eum. Molestias deleniti hic nostrum ipsam aliquam sint voluptatum, pariatur debitis laborum, consequatur mollitia, eaque totam voluptatem porro saepe iste eius aperiam vitae aut. Reprehenderit natus quos iure expedita ex? Maiores nobis ipsum necessitatibus a rerum iusto ratione accusantium sit consequuntur voluptatibus sint ab consectetur, animi aliquid. Dicta reiciendis ipsa tempore aspernatur quibusdam nam laudantium, illo architecto facere repellat cumque ullam. Eveniet assumenda, totam vel vitae reprehenderit in eaque veniam porro quis. Pariatur illo eaque voluptates culpa mollitia molestiae debitis dignissimos architecto est corrupti optio, id blanditiis amet illum officia expedita consectetur laboriosam unde? Quibusdam amet voluptas similique, officia quae molestiae, quisquam odit repudiandae ipsa eius aspernatur distinctio quia alias. Sunt odit ipsam error odio labore excepturi enim nihil dolorum. Labore pariatur accusantium quas! Atque reiciendis cum excepturi aliquid, repellendus velit repellat consequuntur. Asperiores, voluptate tenetur libero molestias nemo non debitis architecto harum natus quam dolore quaerat hic unde doloremque porro? Nam velit similique voluptatum! Nobis harum sint quae aspernatur sed debitis facilis cupiditate doloremque, explicabo ipsa modi voluptates voluptatem maiores iure consequuntur dolor omnis?</p>
            </div>
            <div className="col-4 px-4 jobdetails">
                <h3>Job Details</h3>
                <hr />
                
                <div  className='d-flex jobdetails-feature'>
                  <h4>Experience - </h4>
                  <p>4y</p>
                </div>
                <br />

                <div  className='d-flex jobdetails-feature'>
                  <h4>Salary - </h4>
                  <p>2000 $</p>
                </div>
                <br />
                
                <div  className='d-flex jobdetails-feature'>
                  <h4>Location - </h4>
                  <p>Bengalore</p>
                </div>
                <br />
            </div>
        </div>

      </div>
    </>
  )
}

export default CareerIndividual