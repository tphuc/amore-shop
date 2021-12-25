import React from 'react';
import {Drawer, Checkbox} from '@geist-ui/react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import {XSquare} from '@geist-ui/react-icons'
export const Popupform = ({open, onClose, title}) => {
    const router = useRouter()
    let [dataRender, setDataRender] = React.useState([])
    let [query, setQuery] = React.useState('')
    React.useEffect(() => {
        if (router.query.filter){
            setQuery(router.query.filter)
        }
        switch (title) {
            case 'CATEGORIES':
                setDataRender([
                    {
                    id: 'cate1',
                    title: 'Handbag'
                },
                {
                    id: 'cate2',
                    title: 'Trousers'
                },
                {
                    id: 'cate3',
                    title: 'T-Shirt'
                },
                {
                    id: 'cate4',
                    title: 'Shoes'
                }
            ])
                break;
            case 'COLLECTIONS': 
                setDataRender([
                    {
                    id: 'cate1',
                    title: 'Clothes'
                },
                {
                    id: 'cate2',
                    title: 'Accessories'
                },
                {
                    id: 'cate3',
                    title: 'Shoes'
                },
                {
                    id: 'cate4',
                    title: 'Wool'
                }
            ])
                break;
            case ('COLORS'): 
            setDataRender([
                    {
                        id: 'cate1',
                        title: 'Red'
                    },
                    {
                        id: 'cate2',
                        title: 'Black'
                    },
                    {
                        id: 'cate3',
                        title: 'Gray'
                    },
                    {
                        id: 'cate4',
                        title: 'Silver'
                    }
            ])
            break;

            case ('STYLES') :
            setDataRender([
                {
                    id: 'cate1',
                    title: 'Fashion'
                },
                {
                    id: 'cate2',
                    title: 'Sunglasses'
                },
                {
                    id: 'cate3',
                    title: 'Dresses'
                },
                {
                    id: 'cate4',
                    title: 'Small leather goods'
                }
            ])

            break;

            case 'BRANDS':
                setDataRender([
                    {
                        id: 'cate1',
                        title: 'Converse'
                    },
                    {
                        id: 'cate2',
                        title: 'Gucci'
                    },
                    {
                        id: 'cate3',
                        title: 'Vascara'
                    },
                    {
                        id: 'cate4',
                        title: 'Crocs'
                    }
                ])
            break;
            default:
                break;
        }
    }, [query])
    const handler = (value) => {
        console.log(value)
    }
    return (
        <div>
            <Drawer visible={open} onClose={onClose} placement="right" style={{
                width: '35%'
            }}>
                <Drawer.Title style={{
                    borderBottom: '1px solid lightgray',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '0px 20px',
                    paddingBottom: '2%',
                }}>{title}
                <div style={{
                    marginLeft: 'auto',
                }} onClick={onClose}>
                    <XSquare/>
                </div>
                </Drawer.Title>
                <Drawer.Content style={{
                    margin: '0% 4%'
                }}>
                    <div style={styles.filterItemStyle}>
                        {dataRender.map(item => <div style={{
                            margin: '10px 0px'
                        }}>
                            <Link href={{pathname: 'products/', query: {
                                filter: item.id
                            }}}>
                                <p onClick={onClose} style={{
                                    color:'black'
                                }}>{item.title}</p></Link>
                            </div>)}
                    </div>
                </Drawer.Content>
            </Drawer>
        </div>
    )
}

let styles = {
    drawerStyle: {
        borderBottom: '1px solid lightgray',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0px 20px',
        paddingBottom: '2%',
    },
    filterItemStyle: {
        "&:hover": {
            color: 'red'
        }
    }
}
