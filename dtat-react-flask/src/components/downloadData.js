import "./downloadData.css"
import logo from "../../images/logo_light.png"


function DownloadData() {
    return (
        <div className="downloaddata-main-div">
            <header className="downloaddata-header">
                <div className="downloaddata-header-logo" alt="logo">
                    <img src={logo} alt="logo" className="downloaddata-header-logo-img"/>
                </div>
                <div className="downloaddata-header-heading">Data Download Page</div>
            </header>
            <section className="downloaddata-section">
                <div className="downloaddata-subsection">
                    <dl>
                        <dt>Site ID</dt>
                        <dd><input type="text" placeholder="Enter Site ID" /></dd>
                        <dt>Select File</dt>
                        <dd>
                            <select id="select-file">
                                <option value="pre_data">Download Pre DATA</option>
                                <option value="post_data">Download Post DATA</option>
                                <option value="pre_rar">Download Pre RAR</option>
                                <option selected value="post_rar">Download Post RAR</option>
                            </select>
                        </dd>
                        <div><button>Download</button></div>
                    </dl>

                </div>
            </section>
        </div>
    )
}

export default DownloadData;