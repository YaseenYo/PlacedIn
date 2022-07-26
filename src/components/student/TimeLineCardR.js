

export default function TimeLineCardR({companyName,comPackage,role,dateToApply}) {
    return (
        <div className="timeline-wrapper timeline-inverted timeline-wrapper-success">
            <div className="timeline-badge"></div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h6 className="timeline-title">{companyName}</h6>
                </div>
                <div className="timeline-body">
                    <h5>{comPackage} LPA</h5>
                    <p>{role} : Project Engineer</p>
                </div>
                <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                    <span className="ml-md-auto font-weight-bold">{dateToApply}</span>
                </div>
            </div>
        </div>
    )
}






