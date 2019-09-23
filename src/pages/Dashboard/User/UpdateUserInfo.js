import React, { Component } from 'react';
import { Breadcrumb, Icon, Upload, Select } from 'antd';
// import { Link } from 'react-router-dom';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardContentLayout,
  UnderLine
} from '../../../components/DashboardStyle';
import { ButtonStyle, WrapperAction } from '../../../components/Authentication';
import FormInput from '../../../components/core/FormInput';
import Validator, { EMAIL_REGEX } from '../../../utils/validator';
import UserManager from '../../../services/mngtUser.service';

const { Option } = Select;

const userManager = new UserManager();

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  const message = {};
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default class UpdateUserInfo extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      email: '',
      // type: '',
      // number: '',
      // expridate: '',
      errors: {}
      // loading: false
    };
  }

  componentDidMount() {
    const { id, name, email } = this.props.location.state.userInfoEdit;
    this.setState({
      id,
      name,
      email
    });
  }

  handleChangeImage = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    if (name === 'name' && EMAIL_REGEX.test(value)) {
      this.handleValidateName();
    }
  };

  handleValidateName = () => {
    const { name, errors } = this.state;
    const validateName = Validator.isValidName(name);
    const valied = { ...errors };
    if (!validateName && name.length === 0) {
      valied.name = 'Require Name';
      this.setState({ errors: valied });
    } else if (!validateName && name.length > 0) {
      valied.name = 'Invalid Name';
      this.setState({ errors: valied });
    } else {
      valied.name = '';
      this.setState({ errors: valied });
    }
  };

  editUser = () => {
    const { id, name } = this.state;
    const params = {
      name
    };
    userManager.editUser(id, params).then(() => {
      this.props.history.push('/allUser');
    });
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl, name, email, errors } = this.state;
    return (
      <>
        <DashBoardTittle>
          <h3>Update User Infomation</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Account</Breadcrumb.Item>
            <Breadcrumb.Item href="">Update Infomation</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          <DashBoardContentLayout>
            <div>
              <div>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChangeImage}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: '100%' }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
              <div>
                <FormInput
                  placeholder="Enter Name"
                  label="Name"
                  name="name"
                  type="text"
                  error={errors.name}
                  value={name}
                  handleChange={this.handleChange}
                  handleBlur={this.handleValidateName}
                />
                <p>Email: </p>
                <p>{email}</p>
              </div>
            </div>
            <div>
              <UnderLine>Payment</UnderLine>
              <div>
                <p>Type</p>
                <Select
                  defaultValue="Credit Card"
                  style={{ width: 120 }}
                  onChange={this.handleChange}
                >
                  <Option value={0}>Creadit Card</Option>
                  <Option value={1}>User</Option>
                </Select>
                <FormInput
                  placeholder="Enter Number"
                  label="Number"
                  name="number"
                  type="text"
                  // error={errors.password}
                  handleChange={this.handleChangeForm}
                  handleBlur={this.handleValidateNumber}
                />
                <FormInput
                  placeholder="Enter Expiry Date"
                  label="Expiry Date"
                  name="expirydate"
                  type="text"
                  // error={errors.password}
                  handleChange={this.handleChangeForm}
                  handleBlur={this.handleValidateExpiryDate}
                />
              </div>
            </div>
            <WrapperAction type="login">
              <ButtonStyle onClick={this.editUser}>Save</ButtonStyle>
              <ButtonStyle background="none">Cancel</ButtonStyle>
            </WrapperAction>
          </DashBoardContentLayout>
        </DashBoardContent>
      </>
    );
  }
}
