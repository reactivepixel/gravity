import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Table,
} from 'reactstrap';

const accountBtn = account => (
  <Button className={`${account.btn.btnBrandClassName}btn-brand btn-sm icon`}><i className={account.btn.iconClassName} /></Button>
);

const clientDisplay = (client) => {
  const accountButtons = client.accounts.map(account => accountBtn(account));

  return (
    <tr>
      <td className="text-center">
        <div className="avatar">
          <img src={client.avatarURI} className="img-avatar" alt={client.contactEmail} />
          <span className={client.badgeClassName} />
        </div>
      </td>
      <td>
        <div>{client.name}</div>
        <div className="small text-muted">
          <span>{client.primaryContact}</span>
        </div>
      </td>
      <td>
        {accountButtons}
      </td>
      <td>
        <div className="clearfix">
          <div className="float-left">
            <strong>
              {client.milestone.value}
%
            </strong>
          </div>
          <div className="float-right">
            <small className="text-muted">{client.milestone.title}</small>
          </div>
        </div>
        <Progress className="progress-xs" color={client.milestone.type} value={client.milestone.value} />
      </td>
      <td>
        <div className="small text-muted">{client.activity.title}</div>
        <strong>{client.activity.content}</strong>
      </td>
    </tr>
  );
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          name: 'Bake Me A Cake',
          primaryContact: 'Kerri Johnson',
          avatarURI: 'assets/img/avatars/1.jpg',
          contactEmail: 'noSpam@me.com',
          badgeClassName: '',
          milestone: {
            value: 50,
            title: '1k tweets',
            type: 'warning',
          },
          activity: {
            title: 'Last login',
            content: '10 sec ago',
          },
          accounts: [
            {
              type: 'facebook',
              href: '/#/',
              btn: {
                iconClassName: 'fa fa-facebook ',
                btnBrandClassName: 'btn-facebook ',
              },
            },
            {
              type: 'twitter',
              href: '/#/',
              btn: {
                iconClassName: 'fa fa-twitter ',
                btnBrandClassName: 'btn-twitter ',
              },
            },
          ],
        },
        {
          name: 'Weed Killer',
          primaryContact: 'Doug Oberndorf',
          avatarURI: 'assets/img/avatars/2.jpg',
          contactEmail: 'noSpam@me.com',
          badgeClassName: 'avatar-status badge-success',
          milestone: {
            value: 85,
            title: '4k follows',
            type: 'success',
          },
          activity: {
            title: 'Last login',
            content: '2 days ago',
          },
          accounts: [
            {
              type: 'facebook',
              href: '/#/',
              btn: {
                iconClassName: 'fa fa-facebook',
                btnBrandClassName: 'btn-facebook ',
              },
            },
            {
              type: 'twitter',
              href: '/#/',
              btn: {
                iconClassName: 'fa fa-twitter',
                btnBrandClassName: 'btn-twitter ',
              },
            },
            {
              type: 'youtube',
              href: '/#/',
              btn: {
                iconClassName: 'fa fa-youtube',
                btnBrandClassName: 'btn-youtube ',
              },
            },
          ],
        },
      ],
    };
  }

  render() {
    const { clients } = this.state;
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
                  <th>Live Accounts</th>
                  <th>Next Milestone</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => clientDisplay(client))}
              </tbody>
            </Table>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default Dashboard;
