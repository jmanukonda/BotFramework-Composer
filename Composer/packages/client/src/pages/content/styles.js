import { css } from '@emotion/core';

export const contentContainer = css`
  display: flex;
  height: calc(99vh - 50px);
`;

export const fileList = css`
  flex: 1;
  margin-left: 30px;
  margin-top: 20px;
`;

export const contentEditor = css`
  flex: 4;
  margin-top: 20px;
  margin-left: 20px;
  height: calc(100% - 20px);
`;

export const label = css`
  font-size: 13px;
`;

export const title = css`
  font-weight: bold;
  color: #5f5f5f;
  font-size: 20px;
  line-height: 40px;
  padding-left: 15px;
`;

export const navLinkClass = {
  default: {
    display: 'block',
    textDecoration: 'none',
    color: '#5f5f5f',
    fontSize: '13px',
    fontWeight: 'bold',
    lineHeight: '30px',
    paddingLeft: '15px',
  },
  activestyle: {
    color: '#0083cb',
  },
};