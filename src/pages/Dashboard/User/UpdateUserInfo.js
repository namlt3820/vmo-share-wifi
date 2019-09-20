import React, { Component } from 'react';
import { Breadcrumb, Icon, Upload, Select } from 'antd';
// import { Link } from 'react-router-dom';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardContentLayout,
  UnderLine
} from '../../../components/DashboardStyle';
import { ButtonStyle } from '../../../components/Authentication';
import FormInput from '../../../components/core/FormInput';

const { Option } = Select;
// import UserManager from '../../../services/mngtUser.service';

// const userManager = new UserManager();

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
      // name: '',
      // type: '',
      // number: '',
      // expridate: '',
      loading: false
    };
  }

  handleChange = info => {
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

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <>
        <DashBoardTittle>
          <h3>ALL USER</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Account Management</Breadcrumb.Item>
            <Breadcrumb.Item href="">User Detail</Breadcrumb.Item>
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
                  onChange={this.handleChange}
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
                  // error={errors.name}
                  // value={name}
                  handleChange={this.handleChange}
                  handleBlur={this.handleValidateName}
                />
                <p>Email: </p>
                <p>david.james@gmail.com</p>
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
            <div>
              <ButtonStyle>Save</ButtonStyle>
              <ButtonStyle background="none">Cancel</ButtonStyle>
            </div>
          </DashBoardContentLayout>
        </DashBoardContent>
      </>
    );
  }
}
