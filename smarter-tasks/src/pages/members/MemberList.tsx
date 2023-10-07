import React, {useEffect} from "react";
import {fetchUsers} from "../../context/members/actions.ts";
import {useUsersDispatch} from "../../context/members/context";
import MemberListItems from "./MemberListItems";

const MemberList: React.FC = () => {
  const dispatchUsers = useUsersDispatch();

  useEffect(() => {
    fetchUsers(dispatchUsers);
  }, []);

  return (
      <div className="flex flex-wrap justify-center">
        <MemberListItems/>
      </div>
  );
};

export default MemberList;
