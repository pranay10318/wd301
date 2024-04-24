import React, { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import NewMember from "./NewMember";
import { useTranslate } from "../../context/translate";

const MemberList = React.lazy(() => import("./MemberList"));

const Members = () => {
  const {t} = useTranslate();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">{t('Members')}</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">{t('Loading')}...</div>}>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Members;
