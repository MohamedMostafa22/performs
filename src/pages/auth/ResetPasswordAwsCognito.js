import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import ReactCodeInput from 'react-code-input';
import {useDispatch} from 'react-redux';
import {fetchError} from '../../redux/actions';
import {useIntl} from 'react-intl';
import {Fonts} from '../../shared/constants/AppEnums';
import PropTypes from 'prop-types';
import AppTextField from '../../@crema/core/AppFormComponents/AppTextField';
import IntlMessages from '../../@crema/utility/IntlMessages';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppInfoView from '../../@crema/core/AppInfoView';
import AuthWrapper from './AuthWrapper';

const validationSchema = yup.object({
  newPassword: yup
    .string()
    .required(<IntlMessages id='validation.enterNewPassword' />),
  confirmPassword: yup
    .string()
    .required(<IntlMessages id='validation.reTypePassword' />),
});

const ResetPasswordAwsCognito = () => {
  const dispatch = useDispatch();

  const [pin, setPin] = useState('');

  const {messages} = useIntl();

  return (
    <AuthWrapper>
      <Box sx={{width: '100%'}}>
        <Box
          sx={{
            mb: 5,
            display: 'flex',
            alignItems: 'center',
            '& .logo': {
              height: 40,
            },
          }}
        >
          <img
            className='logo'
            src='/assets/images/logo.png'
            alt='crema-logo'
          />
          <Box
            component='span'
            sx={{
              color: 'text.primary',
              fontSize: 30,
              fontWeight: 500,
              ml: 3,
            }}
          >
            Crema
          </Box>
        </Box>
        <Typography
          variant='h2'
          component='h2'
          sx={{
            mb: 1.5,
            color: (theme) => theme.palette.text.primary,
            fontWeight: Fonts.SEMI_BOLD,
            fontSize: {xs: 14, xl: 16},
          }}
        >
          <IntlMessages id='common.resetPassword' />
        </Typography>

        <Formik
          validateOnChange={true}
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(data, {setErrors, resetForm, setSubmitting}) => {
            if (pin.length !== 6) {
              dispatch(fetchError(messages['validation.pinLength']));
            } else if (data.newPassword !== data.confirmPassword) {
              setErrors({
                confirmPassword: (
                  <IntlMessages id='validation.passwordMisMatch' />
                ),
              });
            } else {
              setSubmitting(true);
              resetForm();
              setSubmitting(false);
            }
          }}
        >
          {({isSubmitting}) => (
            <Form noValidate autoComplete='off'>
              <Box
                sx={{
                  mb: 6,
                  fontSize: {xs: 16, sm: 18},
                }}
              >
                <Typography>
                  <IntlMessages id='common.verificationMessage' />
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: {xs: 4, lg: 6},
                }}
              >
                <ReactCodeInput
                  type='password'
                  value={pin}
                  fields={6}
                  onChange={(value) => setPin(value)}
                />
              </Box>

              <Box
                sx={{
                  mb: {xs: 4, lg: 6},
                }}
              >
                <AppTextField
                  name='newPassword'
                  label={<IntlMessages id='common.newPassword' />}
                  sx={{
                    width: '100%',
                  }}
                  variant='outlined'
                  type='password'
                />
              </Box>

              <Box
                sx={{
                  mb: {xs: 4, lg: 6},
                }}
              >
                <AppTextField
                  name='confirmPassword'
                  label={<IntlMessages id='common.retypePassword' />}
                  sx={{
                    width: '100%',
                  }}
                  variant='outlined'
                  type='password'
                />
              </Box>

              <Button
                variant='contained'
                disabled={isSubmitting}
                color='primary'
                type='submit'
                sx={{
                  fontWeight: Fonts.REGULAR,
                  textTransform: 'capitalize',
                  fontSize: 16,
                  minWidth: 160,
                }}
              >
                <IntlMessages id='common.resetMyPassword' />
              </Button>
            </Form>
          )}
        </Formik>
        <AppInfoView />
      </Box>
    </AuthWrapper>
  );
};

export default ResetPasswordAwsCognito;

ResetPasswordAwsCognito.propTypes = {
  location: PropTypes.object,
};