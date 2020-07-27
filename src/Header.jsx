import React from 'react';
import 'react-simple-flex-grid/lib/main.css';
import './Header.scss';
import * as PropTypes from 'prop-types';
import { FlyoutWithIcons } from '@scripty/react-navigations/lib/FlyoutWithIcons';
import { Breadcrumbs } from '@scripty/react-navigations/lib/Breadcrumbs';
import { FlyoutUserWithIcons } from '@scripty/react-navigations/lib/FlyoutUserWithIcons';
import { Col, Row } from 'react-simple-flex-grid';

export const Header = (props) => {

    let {
        routes,
        onClick,
        selectedKeys,
        userMenuRoutes,
        user,
        layout,
        showBreadcrumbs,
        logo
    } = props;

    let colLayout = {
        logo: {
            xs: 2, sm: 2, md: 2, lg: 2, xl: 2
        },
        flyout: {
            xs: { span: 0 }, sm: { span: 0 }, md: { span: 0 }, lg: 9, xl: 9
        },
        extra: {
            xs: { span: 0 }, sm: { span: 0 }, md: { span: 0 }, lg: 1, xl: 1
        },
        breadcrumbs: {
            xs: 12, sm: 12, md: 12, lg: 12, xl: 12
        }
    };

    if (layout === 'sized') {
        colLayout = {
            logo: {
                xs: 2, sm: 2, md: 2, lg: 2, xl: { span: 1, offset: 1 }
            },
            flyout: {
                xs: { span: 0 }, sm: { span: 0 }, md: { span: 0 }, lg: { span: 0 }, xl: { span: 5, offset: 1 }
            },
            extra: {
                xs: { span: 0 }, sm: { span: 0 }, md: { span: 0 }, lg: 10, xl: { span: 1, offset: 2 }
            },
            breadcrumbs: {
                xs: 12, sm: 12, md: 12, lg: 12, xl: { span: 8, offset: 1 }
            }
        };
    }

    const getBreadcrumbs = () => {
        if (showBreadcrumbs) {
            return (
                <Row className={'breadcrumbs-container'}>
                    <Col {...colLayout.breadcrumbs}>
                        <Breadcrumbs routes={[...routes, ...userMenuRoutes]} selectedKeys={selectedKeys} onClick={onClick}/>
                    </Col>
                </Row>
            )
        }
    }

    return (
        <header className={'header'}>
            <Row>
                <Col {...colLayout.logo}>
                    <div className={'logo'}>{logo}</div>
                </Col>
                <Col {...colLayout.flyout}>
                    <FlyoutWithIcons routes={routes} selectedKeys={selectedKeys} onClick={onClick}/>
                </Col>
                <Col {...colLayout.extra} >
                    <div className={'extra'}>
                    <FlyoutUserWithIcons loginPath={'/login'} user={user} routes={userMenuRoutes} selectedKeys={selectedKeys}
                                         onClick={onClick}/>
                    </div>
                </Col>
            </Row>
            {getBreadcrumbs()}
        </header>
    )
};

Header.defaultProps = {
    onClick: () => {},
    routes: [],
    userMenuRoutes: [],
    selectedKeys: [],
    user: { loggedIn: false },
    layout: 'fullpage',
    showBreadcrumbs: false,
    logo: 'Logo',
};

Header.propTypes = {
    routes: PropTypes.array,
    userMenuRoutes: PropTypes.array,
    selectedKeys: PropTypes.array,
    user: PropTypes.object,
    onClick: PropTypes.func,
    layout: PropTypes.string,
    showBreadcrumbs: PropTypes.bool,
    logo: PropTypes.oneOfType(PropTypes.object, PropTypes.string),
};
