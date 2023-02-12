import React, { useState, useEffect } from 'react'
import './Tab.scss'

const Tab = (props) => {
    const { tabs } = props
    const [selectedTab, setSelectedTab] = useState(null)
    const [styleLine, setLineStyle] = useState('0%')

    const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

    useEffect(() => {
        isActiveTab();
    }, [])

    const handleOnTabChanged = (item) => {
        if (item.selected === true || item.disabled === true) return false;

        tabs.map((tab) => (tab.selected = false));
        item.selected = true;
        const tabsIndexOf = tabs.indexOf(item);
        setSelectedTab(tabsIndexOf)
        setLineStyle(`${tabsIndexOf * (100 / tabs?.length)}%`)
    }

    const isActiveTab = () => {
        const findTabs = tabs.findIndex((tab) => tab.selected)
        setSelectedTab(findTabs)
        setLineStyle(`${findTabs * (100 / tabs.length)}%`)
    }

    return (
        <>
            <div className='tabs'>
                <div
                    className='tabs-active_line'
                    style={{
                        width: `calc(100% / ${tabs.length})`,
                        left: styleLine,
                    }} />
                <div className='tabs-item'>
                    {
                        tabs.map((tab, index) =>
                            <span
                                key={index}
                                onClick={() => handleOnTabChanged(tab)}
                                className={`tab ${tab.disabled === true ? 'disabled' : ''} ${tab.selected === true ? 'active' : ''}`}
                            >
                                <div className='tabs-name'>{tab.name}</div>
                            </span>
                        )
                    }
                </div>
            </div>
            <div className='tab-panel'>
                {Panel && <Panel.Component index={selectedTab} />}
            </div>
        </>
    )
}

export default Tab