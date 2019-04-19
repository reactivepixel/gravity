import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Table,
} from 'reactstrap';

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader> Quick Access </CardHeader>
          <CardBody>
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th>&nbsp;</th>
                  <th>Client</th>
                  <th className="text-center">Live Accounts</th>
                  <th>Next Milestone</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src="assets/img/avatars/1.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-success" />
                    </div>
                  </td>
                  <td>
                    <div>Bake Me A Cake</div>
                    <div className="small text-muted">
                      <span>PrimaryContact</span>
                      {' '}
| Jennifer Floss
                    </div>
                  </td>
                  <td className="text-center">
                    <Button className="btn-facebook btn-brand btn-sm icon"><i className="fa fa-facebook" /></Button>
                    <Button className="btn-youtube btn-brand btn-sm icon"><i className="fa fa-youtube" /></Button>
                    <Button className="btn-twitter btn-brand btn-sm icon"><i className="fa fa-twitter" /></Button>
                    <Button className="btn-twitch btn-brand btn-sm icon"><i className="fa fa-twitch" /></Button>
                    <Button className="btn-soundcloud btn-brand btn-sm icon"><i className="fa fa-soundcloud" /></Button>
                    <Button className="btn-linkedin btn-brand btn-sm icon"><i className="fa fa-linkedin" /></Button>
                    <Button className="btn-google btn-brand btn-sm icon"><i className="fa fa-google" /></Button>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>50%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">1k retweets</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="50" />
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>10 sec ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src="assets/img/avatars/2.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-danger" />
                    </div>
                  </td>
                  <td>
                    <div>Avram Tarasios</div>
                    <div className="small text-muted">
                      <span>Recurring</span>
                      {' '}
| Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-amex" style={{ fontSize: `${24}px` }} />
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>10%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="info" value="10" />
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>5 minutes ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src="assets/img/avatars/3.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-warning" />
                    </div>
                  </td>
                  <td>
                    <div>Quintin Ed</div>
                    <div className="small text-muted">
                      <span>New</span>
                      {' '}
| Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-amex" style={{ fontSize: `${24}px` }} />
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>74%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="warning" value="74" />
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>1 hour ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src="assets/img/avatars/4.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-secondary" />
                    </div>
                  </td>
                  <td>
                    <div>Enéas Kwadwo</div>
                    <div className="small text-muted">
                      <span>New</span>
                      {' '}
| Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-amex" style={{ fontSize: `${24}px` }} />
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>98%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="danger" value="98" />
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Last month</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src="assets/img/avatars/5.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-success" />
                    </div>
                  </td>
                  <td>
                    <div>Agapetus Tadeáš</div>
                    <div className="small text-muted">
                      <span>New</span>
                      {' '}
| Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-amex" style={{ fontSize: `${24}px` }} />
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>22%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="info" value="22" />
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Last week</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src="assets/img/avatars/6.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-danger" />
                    </div>
                  </td>
                  <td>
                    <div>Friderik Dávid</div>
                    <div className="small text-muted">
                      <span>New</span>
                      {' '}
| Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-amex" style={{ fontSize: `${24}px` }} />
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>43%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="43" />
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>Yesterday</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default Dashboard;
