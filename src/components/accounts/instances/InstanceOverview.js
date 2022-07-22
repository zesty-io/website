import React, { useEffect, useState } from 'react'
import { useZestyStore } from 'store';
import { getCookie } from 'cookies-next';


export default function InstanceOverview(){
    const { ZestyAPI, workingInstance } = useZestyStore((state)=> state);
    const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
    console.log("🚀 ~ file: InstanceOverview.js ~ line 9 ~ InstanceOverview ~ instanceZUID", instanceZUID)
    
    /* accountsAPIEndpoints:
    instanceGET: "/instances/INSTANCE_ZUID"
    */

   try {
    const gettingIns = async (zuid)=> {
        let res = await ZestyAPI.getInstance(instanceZUID);
        console.log("🚀 ~ file: InstanceOverview.js ~ line 18 ~ gettingIns ~ res", res)
    };
    gettingIns(instanceZUID);
   } catch (error) {
    console.log("🚀 ~ file: InstanceOverview.js ~ line 17 ~ InstanceOverview ~ error", error)
   }
    // let data = ZestyAPI.getInstance(instanceZUID);
    


    return (
        <>My Overview!</>
    );
}