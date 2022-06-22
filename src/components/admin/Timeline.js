import React from 'react';
import "./timeline.css";

export default function Timeline() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                        <div className='ml-3' style={{marginBottom : "70px"}}>
                            <button className='right floated ui button primary mr-3'>Add timeline</button>
                            <h4 className="card-title">Timeline</h4>
                            <p className="card-description">Company Drives Timeline</p>
                        </div>
                        <div className="mt-5">
                            <div className="timeline">
                            <div className="timeline-wrapper timeline-wrapper-warning">
                                <div className="timeline-badge"></div>
                                <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h6 className="timeline-title">TCS Digital</h6>
                                </div>
                                <div className="timeline-body">
                                    <h5>7.7 LPA</h5>
                                    <p>Role : development</p>
                                </div>
                                <div className="timeline-footer d-flex align-items-center flex-wrap">
                                    <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                                    <span className="ml-md-auto font-weight-bold">17 Oct 2021</span>
                                </div>
                                </div>
                            </div>
                            <div className="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                                <div className="timeline-badge"></div>
                                <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h6 className="timeline-title">Maple labs</h6>
                                </div>
                                <div className="timeline-body">
                                    <h5>5.5 LPA</h5>
                                    <p>Role : development</p>
                                </div>
                                <div className="timeline-footer d-flex align-items-center flex-wrap">
                                    <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                                    <span className="ml-md-auto font-weight-bold">25th Oct 2021</span>
                                </div>
                                </div>
                            </div>
                            <div className="timeline-wrapper timeline-wrapper-success">
                                <div className="timeline-badge"></div>
                                <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h6 className="timeline-title">Capgemini</h6>
                                </div>
                                <div className="timeline-body">
                                    <h5>4 LPA</h5>
                                    <p>Role : Analyst</p>
                                </div>
                                <div className="timeline-footer d-flex align-items-center flex-wrap">
                                    <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                                    <span className="ml-md-auto font-weight-bold">9th Nov 2021</span>
                                </div>
                                </div>
                            </div>
                            <div className="timeline-wrapper timeline-inverted timeline-wrapper-info">
                                <div className="timeline-badge"></div>
                                <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h6 className="timeline-title">Cognizent</h6>
                                </div>
                                <div className="timeline-body">
                                    <h5>4 LPA</h5>
                                    <p>Role : Project Engineer</p>
                                </div>
                                <div className="timeline-footer d-flex align-items-center flex-wrap">
                                    <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                                    <span className="ml-md-auto font-weight-bold">17th Dec 2021</span>
                                </div>
                                </div>
                            </div>
                            <div className="timeline-wrapper timeline-wrapper-primary">
                                <div className="timeline-badge"></div>
                                <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h6 className="timeline-title">Nokia</h6>
                                </div>
                                <div className="timeline-body">
                                    <h5>8 LPA</h5>
                                    <p>Role : Junior Engineer</p>
                                </div>
                                <div className="timeline-footer d-flex align-items-center flex-wrap">
                                    <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                                    <span className="ml-md-auto font-weight-bold">Feb 2021</span>
                                </div>
                                </div>
                            </div>
                            <div className="timeline-wrapper timeline-inverted timeline-wrapper-info">
                                <div className="timeline-badge"></div>
                                <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h6 className="timeline-title">Google</h6>
                                </div>
                                <div className="timeline-body">
                                    <h5>12 LPA</h5>
                                    <p>Role : Internship</p>
                                </div>
                                <div className="timeline-footer d-flex align-items-center flex-wrap">
                                    <i className="mdi mdi-heart-outline text-muted mr-1"></i>
                                    <span className="ml-md-auto font-weight-bold">June 2021</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
