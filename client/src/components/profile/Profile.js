import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './ProfileTop';

const Profile = ({ 
    getProfileById, 
    profile: { profile, loading},
    auth, 
    match }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [ getProfileById, match.params.id ]);

    return (
        <Fragment>
            {profile === null || loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Link to="/profiles" className="btn btn-light">
                        Back To Profiles
                    </Link> 
                    {auth.isAuthentication && 
                        auth.loading === false && 
                        auth.user_id === profile.user._id && (
                            <Link to='/edit-profile' className="btn btn-dark">
                                Edit profile
                            </Link>
                    )} 
                    <div class="profile-grid my-1">
                        <ProfileTop />
                    </div>         
                </Fragment>
            )}
        </Fragment>
    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
