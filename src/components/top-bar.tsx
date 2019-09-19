import * as React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';

import { Stylable } from '../types';
import { Icon } from '../icons/icon';

export const Row = styled.div`
`;

export const TopBarMenu = styled(Row)`
  display: flex;
`;
TopBarMenu.displayName = `TopBarMenu`;

export const TopBarMenuItem = styled(Row)`
  display: flex;
  padding: 0 3rem;
`;
TopBarMenuItem.displayName = `TopBarMenuItem`;

export const BaseTopBar = ({ className }: Stylable) => {

  return (
    <div className={`${className} top-bar`}>
      <div>
        <Icon />
        <img src={logo} alt="logo" />
        <a className="home-link" href="/"></a>
        <nav role="navigation">
          <ul className="hdr-menu">
            <li><a href="/items0"></a></li>
            <li className="hdr-selected" aria-current="page"><span>Items1</span></li>
            <li><a href="/items2">Items2</a></li>
          </ul>
        </nav>
        <div>Search</div>
      </div>
    </div>
  );
}

export const TopBar = styled(BaseTopBar)`
    align-items: stretch;
    background-color: ${ ({ theme }) => theme.color.black};
    color: ${ ({ theme }) => theme.color.white};
    display: flex;
    font-weight: ${({ theme }) => theme.font.weight.light};
    height: 65px;
    padding: 0 1rem;
    flex-shrink: 0;

    a:link,
    a:visited {
        text-decoration: none;
        color: currentColor;
    }

    .home-link {
        display: flex;
        align-items: center;
    }

    > div {

        align-items: stretch;
        display: flex;
        max-width: ${({ theme }) => theme.pageWidth};
        margin: 0 auto 0 ${({ theme }) => theme.topBarLeftMargin};

        > img {
            width: 152px;
            align-self: center;
        }

        > nav {
            display: flex;
            align-items: stretch;
            ul {
                align-items: stretch;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                list-style: none;
                margin: 0;
                padding: 0 3rem;

                li {
                    display: flex;
                    flex-direction: row;
                    align-items: stretch;
                    border-top: 5px solid transparent;
                    border-bottom: 5px solid rgb(0,0,0,0);
                    transition: all 0.5s ease;
                    transition-property: border-bottom, background-color;
                    letter-spacing: 0.5px;

                    :hover {
                        background-color: ${ ({ theme }) => theme.color.grey30};
                    }

                    &.hdr-selected {
                        border-bottom-color: ${ ({ theme }) => theme.color.red};
                        font-weight: ${({ theme }) => theme.font.weight.bold};
                        letter-spacing: 0;
                    }

                    > a,
                    > span {
                        align-items: center;
                        display: flex;
                        flex-direction: row;
                        padding: 0 20px;
                    }
                }
            }
        }

        > div {
            display: flex;
            align-items: center;
        }

    }
`;
TopBar.displayName = 'TopBar';
