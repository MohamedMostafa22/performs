// import {
//   alpha,
//   Avatar,
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   InputLabel,
//   ListItemText,
//   MenuItem,
//   OutlinedInput,
//   Select,
//   styled,
//   Typography,
// } from '@mui/material';
// import {Form, Formik} from 'formik';
// import {useState} from 'react';
// import {useDropzone} from 'react-dropzone';
// import * as yup from 'yup';
// import EditIcon from '@mui/icons-material/Edit';
// import {Fonts} from 'shared/constants/AppEnums';
// import {useRecoilState, useRecoilValue} from 'recoil';
// import players from 'recoil/players';
// import playerImage from '../../img/player.png';
// import PropTypes from 'prop-types';
// import getLayerItemIdsFromString from 'utils/getLayerItemIdsFromString';
// import {useParams} from 'react-router-dom';
// import dataSourceMap from './dataSourceMap';
// import championships from 'recoil/championships';
// import clubs from 'recoil/clubs';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import {backgroundLight} from '@crema/utility/AppContextProvider/defaultConfig';
// import belts from 'recoil/belts';
// import AppTextField from '../../components/AppTextField';

// const validationSchema = yup.object({
//   name: yup.string().required('Please enter a name'),
//   title: yup.string().required('Please enter a title'),
//   school: yup.string().required('Please enter a school'),
//   gender: yup.string().required('Please enter a gender'),
//   weight: yup.string().required('Please enter a weight'),
//   age: yup.number().required('Please enter an age'),
//   height: yup.string().required('Please enter a height'),
//   belt: yup.string().required('Please enter a belt'),
// });

// const HeaderWrapper = styled('div')(() => {
//   return {
//     padding: 20,
//     marginLeft: -24,
//     marginRight: -24,
//     marginTop: -20,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     '& .dropzone': {
//       outline: 0,
//       '&:hover .edit-icon, &:focus .edit-icon': {
//         display: 'flex',
//       },
//     },
//   };
// });

// const AvatarViewWrapper = styled('div')(({theme}) => {
//   return {
//     position: 'relative',
//     cursor: 'pointer',
//     '& .edit-icon': {
//       position: 'absolute',
//       bottom: 0,
//       right: 0,
//       zIndex: 1,
//       border: `solid 2px ${theme.palette.background.paper}`,
//       backgroundColor: alpha(theme.palette.primary.main, 0.7),
//       color: theme.palette.primary.contrastText,
//       borderRadius: '50%',
//       width: 26,
//       height: 26,
//       display: 'none',
//       alignItems: 'center',
//       justifyContent: 'center',
//       transition: 'all 0.4s ease',
//       '& .MuiSvgIcon-root': {
//         fontSize: 16,
//       },
//     },
//   };
// });

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// export default function AddPlayerForm({onSubmit}) {
//   const [userImage, setUserImage] = useState('');
//   const [idCardImg, setIdCardImg] = useState('');
//   const [birthImg, setBirthImg] = useState('');

//   const params = useParams();
//   const layers = getLayerItemIdsFromString(params['0']);

//   const currentLayerItem = Array.isArray(layers) && layers[layers.length - 1];

//   const [currentLayerItemDataSource, setCurrentLayerItemDataSource] =
//     useRecoilState(dataSourceMap[currentLayerItem.type]);

//   const {getRootProps: getAvatarRootProps, getInputProps: getAvatarInputProps} =
//     useDropzone({
//       accept: 'image/*',
//       onDrop: (acceptedFiles) => {
//         setUserImage(URL.createObjectURL(acceptedFiles[0]));
//       },
//     });

//   const {getRootProps: getIdRootProps, getInputProps: getIdInputProps} =
//     useDropzone({
//       accept: 'image/*',
//       onDrop: (acceptedFiles) => {
//         setIdCardImg(URL.createObjectURL(acceptedFiles[0]));
//       },
//     });

//   const {getRootProps: getBirthRootProps, getInputProps: getBirthInputProps} =
//     useDropzone({
//       accept: 'image/*',
//       onDrop: (acceptedFiles) => {
//         setBirthImg(URL.createObjectURL(acceptedFiles[0]));
//       },
//     });

//   const selectedClubLayer =
//     Array.isArray(layers) && layers.find((layer) => layer.type === 'clubs');
//   const existingClubs = useRecoilValue(clubs);
//   const selectedClub =
//     selectedClubLayer &&
//     existingClubs.find((c) => c.id === selectedClubLayer.id);

//   const existingChampionships = useRecoilValue(championships);
//   const existingBelts = useRecoilValue(belts);

//   const [existingPlayers, setExistingPlayers] = useRecoilState(players);

//   return (
//     <Formik
//       validateOnChange={true}
//       initialValues={{
//         name: '',
//         title: '',
//         icon: userImage,
//         school: '',
//         gender: '',
//         idImg: '',
//         championships: [],
//         age: '',
//         height: '',
//         club: selectedClub?.name,
//         belt: '',
//         birthCertificateImg: '',
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(data) => {
//         const previousPlayer =
//           Array.isArray(existingPlayers) &&
//           existingPlayers.length > 0 &&
//           existingPlayers[existingPlayers.length - 1];
//         const playerId = (previousPlayer && previousPlayer.id + 1) || 0;
//         const searchId = (() => {
//           if (!previousPlayer) return 'P-1000';
//           const splitId = previousPlayer.searchId.split('-');
//           const idNumber = Number(splitId[1]);
//           return `P-${idNumber + 1}`;
//         })();
//         const player = {
//           name: data.name,
//           title: data.title,
//           icon: userImage || playerImage,
//           id: playerId,
//           searchId,
//           progress: 0,
//           isFullWidth: Boolean(userImage),
//           type: 'players',
//           strengths: 0,
//           weaknesses: 0,
//           moderate: 0,
//           children: {},
//           meta: [],
//           recommendations: [],
//           actions: [],
//         };

//         setExistingPlayers(existingPlayers.concat(player));
//         setCurrentLayerItemDataSource(
//           currentLayerItemDataSource.map((p) => {
//             if (p.id === currentLayerItem.id) {
//               return {
//                 ...p,
//                 children: {
//                   ...p.children,
//                   ids: p.children.ids.concat(player.id),
//                 },
//               };
//             }
//             return p;
//           }),
//         );
//         onSubmit && onSubmit();
//       }}
//     >
//       {({values, setFieldValue}) => (
//         <Form noValidate autoComplete='off'>
//           <HeaderWrapper>
//             <div {...getAvatarRootProps({className: 'dropzone'})}>
//               <input {...getAvatarInputProps()} />
//               <label htmlFor='icon-button-file'>
//                 <AvatarViewWrapper>
//                   <Avatar
//                     sx={{
//                       width: 60,
//                       height: 60,
//                     }}
//                     src={userImage ? userImage : ''}
//                   />
//                   <Box className='edit-icon'>
//                     <EditIcon />
//                   </Box>
//                 </AvatarViewWrapper>
//               </label>
//             </div>
//             {values.name ? (
//               <Box component='h4' fontWeight={Fonts.SEMI_BOLD} mt={2}>
//                 {values.name}
//               </Box>
//             ) : null}
//           </HeaderWrapper>

//           <Box
//             sx={{
//               padding: 5,
//               ml: -6,
//               mr: -6,
//             }}
//           >
//             <Box
//               sx={{
//                 px: 5,
//                 mx: -5,
//               }}
//             >
//               <div>
//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='Name'
//                   name='name'
//                 />

//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='Title'
//                   name='title'
//                 />

//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='School'
//                   name='school'
//                 />

//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='Age'
//                   name='age'
//                   type='number'
//                 />

//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='Height'
//                   name='height'
//                   type='number'
//                 />

//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='Weight'
//                   name='weight'
//                   type='number'
//                 />

//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='Gender'
//                   name='gender'
//                   select
//                 >
//                   {['male', 'female'].map((option) => (
//                     <MenuItem key={option} value={option}>
//                       {option}
//                     </MenuItem>
//                   ))}
//                 </AppTextField>

//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='Club'
//                   value={selectedClub?.name}
//                   disabled={selectedClub}
//                   name='club'
//                 />

//                 <AppTextField
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                   variant='outlined'
//                   label='Belt'
//                   name='belt'
//                   select
//                 >
//                   {existingBelts.map((option) => (
//                     <MenuItem key={option.id} value={option.name}>
//                       {option.name}
//                     </MenuItem>
//                   ))}
//                 </AppTextField>

//                 <FormControl
//                   sx={{
//                     width: '100%',
//                     mb: {xs: 4, xl: 6},
//                   }}
//                 >
//                   <InputLabel id='championships-select-label'>
//                     Championships
//                   </InputLabel>
//                   <Select
//                     labelId='championships-select-label'
//                     multiple
//                     input={<OutlinedInput label='Championships' />}
//                     renderValue={(selected) => selected.join(', ')}
//                     MenuProps={MenuProps}
//                     value={values.championships}
//                     onChange={(e) => {
//                       const {
//                         target: {value},
//                       } = e;
//                       setFieldValue(
//                         'championships',
//                         typeof value === 'string' ? value.split(',') : value,
//                       );
//                     }}
//                   >
//                     {existingChampionships.map((c) => (
//                       <MenuItem key={c.name} value={c.name}>
//                         <Checkbox
//                           checked={values.championships.indexOf(c.name) > -1}
//                         />
//                         <ListItemText primary={c.name} />
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <Box
//                   sx={{
//                     mb: {xs: 4, xl: 6},
//                   }}
//                 >
//                   <InputLabel
//                     id='championships-select-label'
//                     sx={{
//                       mb: 1,
//                     }}
//                   >
//                     Identification Card
//                   </InputLabel>
//                   <Box
//                     sx={{
//                       width: '100%',
//                       height: 100,
//                       border: 2,
//                       borderColor: 'grey.400',
//                       borderRadius: 1,
//                       borderStyle: 'dashed',
//                       '&:hover': {
//                         borderColor: 'primary.main',
//                       },
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       backgroundColor: backgroundLight.default,
//                     }}
//                     {...getIdRootProps({className: 'dropzone'})}
//                   >
//                     <input {...getIdInputProps()} />
//                     {!idCardImg && (
//                       <Typography>Upload Identification Card Image</Typography>
//                     )}
//                     {idCardImg && (
//                       <CheckCircleIcon color='success' fontSize='large' />
//                     )}
//                   </Box>
//                 </Box>

//                 <Box
//                   sx={{
//                     mb: {xs: 4, xl: 6},
//                   }}
//                 >
//                   <InputLabel
//                     id='championships-select-label'
//                     sx={{
//                       mb: 1,
//                     }}
//                   >
//                     Birth Certificate
//                   </InputLabel>
//                   <Box
//                     sx={{
//                       width: '100%',
//                       height: 100,
//                       border: 2,
//                       borderColor: 'grey.400',
//                       borderRadius: 1,
//                       borderStyle: 'dashed',
//                       '&:hover': {
//                         borderColor: 'primary.main',
//                       },
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       backgroundColor: backgroundLight.default,
//                     }}
//                     {...getBirthRootProps({className: 'dropzone'})}
//                   >
//                     <input {...getBirthInputProps()} />
//                     {!birthImg && (
//                       <Typography>Upload Birth Certificate Image</Typography>
//                     )}
//                     {birthImg && (
//                       <CheckCircleIcon color='success' fontSize='large' />
//                     )}
//                   </Box>
//                 </Box>
//               </div>
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               mx: -1,
//               textAlign: 'right',
//             }}
//           >
//             <Button
//               sx={{
//                 position: 'relative',
//                 minWidth: 100,
//               }}
//               color='primary'
//               variant='contained'
//               type='submit'
//               fullWidth
//             >
//               Save
//             </Button>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// AddPlayerForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
