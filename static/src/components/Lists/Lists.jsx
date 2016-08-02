import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DatePicker, Input, Button, Switch, Table, Icon } from 'antd';
// import Todo from './Todo';
import styles from './Lists.less';

const RangePicker = DatePicker.RangePicker;

function onChange(value, dateString) {
    console.log('From: ', value[0], ', to: ', value[1]);
    console.log('From: ', dateString[0], ', to: ', dateString[1]);
}

function onChange1(checked) {
    console.log(`switch to ${checked}`);
}

/**
 * 列表字段信息
 */
const columns = [{
    title: '项目',
    dataIndex: 'title',
    key: 'title',
    render: (text, link) => <a href="#">{text}</a>,
}, {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
}, {
    title: '总体进度',
    dataIndex: 'progress',
    key: 'progress',
}, {
    title: '里程碑',
    dataIndex: 'tag',
    key: 'tag',
}, {
    title: '下周计划',
    dataIndex: 'next_week_plan',
    key: 'next_week_plan',
}, {
    title: '问题/风险',
    dataIndex: 'description',
    key: 'description',
}, {
    title: '涉及子系统',
    dataIndex: 'sub_porject',
    key: 'sub_porject',
}, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
        <span>
            <a href="#">编辑 {record.key}</a>
            <span className="ant-divider"></span>
            <a href="#">删除</a>
        </span>
    ),
}];

const Lists = ({ lists, dispatch }) => {
    let data = lists.list;
    
    const pagination = {
        total: data.length,
        showSizeChanger: true,
        onShowSizeChange(current, pageSize) {
            console.log('Current: ', current, '; PageSize: ', pageSize);
        },
        onChange(current) {
            console.log('Current: ', current);
        },
    };

    return (
        <div className={styles.main}>
            <div className={`${styles.searchFilter} clearfix`}>
                <div className="pull-left">
                    <label className={styles.filterLabel}>筛选日期: <RangePicker style={{ width: 184 }} onChange={onChange} /></label>
                    <label className={styles.filterLabel}><Input placeholder="基本使用" style={{ width: 160 }} /></label>
                    <label className={styles.filterLabel}>只显示自己: <Switch defaultChecked={false} onChange={onChange1} /></label>
                </div>
                <div className="pull-right">
                    <Button type="primary" icon="search">搜索</Button>
                </div>
            </div>
            <div className={styles.list}>
                <Table columns={columns} dataSource={lists.list} pagination={pagination} />
            </div>
        </div>
    );
};

Lists.propTypes = {};

function filter(lists, pathname) {
    const newList = lists.list.filter(list => {
        return true;
    });
    return { ...lists, list: newList };
}

function mapStateToProps({ lists }, { location }) {
    return {
        lists: lists
    };
}

// export default Lists;
export default connect(mapStateToProps)(Lists);
