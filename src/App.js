import React from 'react';
import './App.css';

import {Layout, Menu, Breadcrumb, Image, Dropdown, Button, Input, Table, Select, DatePicker, Space, Tabs} from 'antd';
import {DownOutlined , UserOutlined, LaptopOutlined, NotificationOutlined,HomeOutlined,MenuFoldOutlined,MinusSquareTwoTone,SyncOutlined,SlidersOutlined,ProfileOutlined,UserSwitchOutlined,UsergroupDeleteOutlined,SettingFilled } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { TextArea } = Input;

const { TabPane } = Tabs;
/*
function loadPdf() {
  //Get the PDF Viewer instance
  var pdfviewer = document.getElementById('container').ej2_instances[0];
// load PDF document in PDF Viewer
  pdfviewer.load('Angular_Assessment.pdf',null);
}*/


function callback(key) {
  console.log(key);
}
const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const { Option } = Select;

function onChangee(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Profilim</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Page List</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <a href="#"> Çıkış Yap</a>
      </Menu.Item>
    </Menu>
);




const dataSource = [
  {
    key: '1',
    name: '1',
    age: 'ReactJs',
    address: 'lorem ipsum',
  },
  {
    key: '2',
    name: '2',
    age: 'AntDesign',
    address: 'lorem ipsum',
  },
];

const columns = [
  {
    title: '#id',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Title',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Entities',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Photos',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Promos',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Menu',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Created',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Modified',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Update',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Delete',
    dataIndex: 'address',
    key: 'address',
  },
];


function App(){

   return(


      <Layout>
    <Header className="header">
      <div className="logo" />
      <Image style={{position:"absolute" , left:"3px"}}
          width={240}
          src="https://lh3.googleusercontent.com/FpTrSBZioeCJqJq18eM5IIAafEX7y4Omhv414Ry6SFFcyWWxJ5gcE8Bgyxmo22uayCap9g=s170"
      />

      <Dropdown   overlay={menu} trigger={['click']}>
        <a style={{position:"absolute" , left:"1200px",color:"grey"}} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hoşgeldin Süha Uzun <DownOutlined/>
        </a>
      </Dropdown>

    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >

          <SubMenu style={{backgroundColor:"#808080", color:"white"}} key="sub1" icon={<HomeOutlined />} title="Ana Sayfa">
          </SubMenu>
          <SubMenu key="sub2" icon={<MenuFoldOutlined />} title="Menü Yönetimi">
            <Menu.Item  onClick={menu}  key="5">Menü Ekle</Menu.Item>
            <Menu.Item key="6">Menü Listele</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<MinusSquareTwoTone />} title="Sayfa Yönetimi">
            <Menu.Item key="9">Anasayfa</Menu.Item>
            <Menu.Item key="10">Merkezlerimiz</Menu.Item>
            <Menu.Item key="11">Doktorlarımız</Menu.Item>
            <Menu.Item key="12">Tıbbi birimlerimiz</Menu.Item>
            <Menu.Item key="12">Genel Sayfa</Menu.Item>

          </SubMenu>

          <SubMenu key="sub4" icon={<SyncOutlined/>} title="Tema Yönetimi">
            <Menu.Item key="13">Tema Ekle</Menu.Item>
            <Menu.Item key="14">Tema Listele</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<SlidersOutlined />} title="Slider Yönetimi">
            <Menu.Item key="17">Banner Ekle</Menu.Item>
            <Menu.Item key="18">Banner Listele</Menu.Item>
            <Menu.Item key="19">Mini Slider Ekle</Menu.Item>
            <Menu.Item key="20">Mini Slider Listele</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" icon={<NotificationOutlined/>} title="Pop up Yönetimi">
            <Menu.Item key="21">PopUp Ekle</Menu.Item>
            <Menu.Item key="22">PopUp Listele</Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" icon={<ProfileOutlined />} title="Dosya Yönetimi">
            <Menu.Item key="25">Resimler</Menu.Item>
            <Menu.Item key="26">Videolar</Menu.Item>
            <Menu.Item key="27">Dosyalar</Menu.Item>
          </SubMenu>

          <SubMenu key="sub8" icon={<UserSwitchOutlined />} title="Kullanıcı İşlemleri">
            <Menu.Item key="29">Kullanıcılar</Menu.Item>
            <Menu.Item key="30">Kullanıcı Ekle</Menu.Item>
          </SubMenu>
          <SubMenu key="sub9" icon={<UsergroupDeleteOutlined/>} title="Kullanıcı Grupları">
            <Menu.Item key="33">Kullanıcı ekle</Menu.Item>
            <Menu.Item key="34">Yeni Kullanıcı Ekle</Menu.Item>
          </SubMenu>
          <SubMenu key="sub10" icon={<SettingFilled/>} title="Genel Ayarlar">
            <Menu.Item key="37">Dil Yönetimi</Menu.Item>
            <Menu.Item key="38">Sosyal Medya Ayarları</Menu.Item>
            <Menu.Item key="39">Ayarlar</Menu.Item>

          </SubMenu>


        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb  style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Library</Breadcrumb.Item>
          <Breadcrumb.Item>Data</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 685,
          }}
        >
          <Button style={{margin:"5px"}} >
            Satır Sayısı
          </Button>
          <Button onclick="loadPdf()"  style={{margin:"5px"}} >Yazdır</Button>
          <Button  style={{margin:"5px"}} >
            Excel
          </Button>
          <Button style={{margin:"5px"}} >
            Pdf
          </Button>


          <Input  style={{width:"190px",marginLeft:"619px"}} placeholder="Search" />



          <Table style={{margin:"10px"}} dataSource={dataSource} columns={columns} />
          <h3 style={{position:"relative", top:"34px"}}>Doğru Giriş</h3>
          <Input style={{marginTop:"33px"}} required/>
          <h3 style={{position:"relative", top:"34px"}}>Hatalı Giriş</h3>
          <Input style={{marginTop:"33px"}} required/>
          <h3 style={{position:"relative", top:"34px"}}>Default Giriş</h3>
          <Input style={{marginTop:"33px"}}  required />

          <div style={{ margin: '24px 0' }} />
        <h3>Content</h3>
          <TextArea
              placeholder="Controlled autosize"
              autoSize={{ minRows: 30, maxRows: 30 }}
          />
          <div style={{ margin: '24px 0' }} />
          <h3>Menu</h3>
          <Select
              showSearch
              style={{ width: 1145 }}
              placeholder="Kategori"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
          >


            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <div style={{ margin: '24px 0' }} />
        <h3>Template</h3>
          <Select
              showSearch
              style={{ width: 1145 }}
              placeholder="No Template"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
          >


            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <div style={{ margin: '21px 0' }} />
          <Button type="primary">Submit</Button>

          <div style={{ margin: '28px 0' }} />
          <Space style={{width:"2400px"}} direction="vertical" size={12}>
            <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                onChange={onChangee}
                onOk={onOk}
            />
          </Space>
          <div style={{ margin: '28px 0' }} />

          <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="TÜRKÇE" key="1">
            TR
          </TabPane>
          <TabPane tab="İNGİLİZCE" key="2">
            ENG
          </TabPane>
          <TabPane tab="ALMANCA" key="3">
            DEUTCH
          </TabPane>
        </Tabs>

        </Content>


      </Layout>
    </Layout>
  </Layout>
   );

}

export default App;
