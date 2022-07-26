import React from 'react'

export default function StudentsTable({title,showSearch}) {
    return (
        <div className='ui card' style={{padding:"20px"}}>
            <div className='m-3 mb-3'>
                <span style={{fontSize : "25px",fontWeight : "600"}}>{title}</span>
                { showSearch ? <div className="ui right floated search">
                    <div className="small ui icon input mr-3">
                        <input className="prompt" type="text" placeholder="search..."/>
                        <i className="search icon"></i>
                    </div>
                </div> : null}
            </div>
            <table className="ui celled table">
                <thead className="full-width">
                    <tr>
                        <th>Student</th>
                        <th>Branch</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>10th %</th>
                        <th>12th %</th>
                        <th>CGPA</th>
                        <th>Backlogs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h4 className="ui image header">
                                <img src="khalida.png" className="ui mini rounded image"/>
                                <div className="content">
                                    Monica
                                    <div className="sub header">1DA18CS086</div>
                                </div>
                            </h4>
                        </td>
                        <td>CSE</td>
                        <td>jhlilk22@yahoo.com</td>
                        <td>9448564122</td>
                        <td>90</td>
                        <td>94</td>
                        <td>8.2</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>
                            <h4 className="ui image header">
                                <img src="rumu.png" className="ui mini rounded image"/>
                                <div className="content">
                                    Khaleel
                                    <div className="sub header">1DA18CS087</div>
                                </div>
                            </h4>
                        </td>
                        <td>CSE</td>
                        <td>khaleel@happymeal.com</td>
                        <td>6362565478</td>
                        <td>88</td>
                        <td>84</td>
                        <td>7.2</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>
                            <h4 className="ui image header">
                                <img src="saba.png" className="ui mini rounded image"/>
                                <div className="content">
                                    Rihana
                                    <div className="sub header">1DA18CS088</div>
                                </div>
                            </h4>
                        </td>
                        <td>CSE</td>
                        <td>rihana@gmail.com</td>
                        <td>9832565478</td>
                        <td>72</td>
                        <td>68</td>
                        <td>6.4</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>
                            <h4 className="ui image header">
                                <img src="salman.png" className="ui mini rounded image"/>
                                <div className="content">
                                    Salman
                                    <div className="sub header">1DA18CS089</div>
                                </div>
                            </h4>
                        </td>
                        <td>CSE</td>
                        <td>student@gmail.com</td>
                        <td>6263565478</td>
                        <td>92</td>
                        <td>94</td>
                        <td>8.8</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>
                            <h4 className="ui image header">
                                <img src="rohit.png" className="ui mini rounded image"/>
                                <div className="content">
                                    Sakhib
                                    <div className="sub header">1DA18CS090</div>
                                </div>
                            </h4>
                        </td>
                        <td>CSE</td>
                        <td>yoso@gmail.com</td>
                        <td>6362565478</td>
                        <td>81</td>
                        <td>98</td>
                        <td>9.6</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
