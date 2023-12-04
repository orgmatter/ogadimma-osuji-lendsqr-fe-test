import React, {useState} from "react";
import { Paper, Rating, Box, Tabs, Tab, Typography, Divider } from "@mui/material";
import { Images } from "../../../../../../../images";

export default function UserDetailTabs(props: any) {

    const { header, content } = props;

    const [tabValue, setTabValue] = useState(0);

    const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    }

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }
      
    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            className="tabpanel-cover"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 0 }}>
                  {children}
              </Box>
            )}
          </div>
        );
    }
      
    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    
    return (
        <>
            <div className="paper-header-cover">
                <Paper className="paper-cover">
                    <div className="user-details-header-cover-flex">
                        <div className="user-details-header-cover-item">
                            <div className="header-intro-cover-flex">
                                <div className="header-intro-cover-item">
                                    <div className="intro-cover-flex">
                                        <div className="intro-cover-item">
                                            <div className="avatar-name-cover-flex">
                                                <div className="avatar-name-cover-item">
                                                    <img className="avatar-img" src={Images.dashboard.users.userDetails.header.avatarImg} alt="user avatar" />
                                                </div>
                                                <div className="avatar-name-cover-item">
                                                    <h2 className="name-text">{header.fullname}</h2>
                                                    <p className="userid-text">{header.id}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intro-cover-item">
                                            <div className="user-tier-cover">
                                                <p className="user-tier-text">User's Tier</p>
                                                <Rating
                                                    className="rating-cover"
                                                    name="read-only"
                                                    value={header.userTier}
                                                    max={3}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="intro-cover-item">
                                            <div className="bank-acct-info-cover">
                                                <h2 className="income-text">{header.monthlyIncome}</h2>
                                                <p className="acct-info-text">{header.accountNumber}/{header.bankName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-tabs-cover-flex">
                                <div className="header-tabs-cover-item">
                                    <Box 
                                        className="tab-box-cover"
                                        sx={{borderBottom: 1, borderColor: 'divider'}}
                                    >
                                        <Tabs
                                            className="tabs-cover"
                                            value={tabValue}
                                            onChange={handleTabsChange}
                                        >
                                            <Tab className={`tab-cover ${tabValue === 0 && 'tab-cover-active'}`} label="General Details" {...a11yProps(0)} />
                                            <Tab className={`tab-cover ${tabValue === 1 && 'tab-cover-active'}`} label="Documents" {...a11yProps(1)} />
                                            <Tab className={`tab-cover ${tabValue === 2 && 'tab-cover-active'}`} label="Bank Details" {...a11yProps(2)} />
                                            <Tab className={`tab-cover ${tabValue === 3 && 'tab-cover-active'}`} label="Loans" {...a11yProps(3)} />
                                            <Tab className={`tab-cover ${tabValue === 4 && 'tab-cover-active'}`} label="Savings" {...a11yProps(4)} />
                                            <Tab className={`tab-cover ${tabValue === 5 && 'tab-cover-active'}`} label="App and System" {...a11yProps(5)} />
                                        </Tabs>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
            <div className="paper-content-cover">
                <Paper className="paper-cover">
                    <div className="user-details-content-cover-flex">
                        <div className="user-details-content-cover-item">
                            <div className="custom-tab-panel-cover">
                                <CustomTabPanel value={tabValue} index={0}>
                                    <div className="tabpanel-cover-flex">
                                        <div className="tabpanel-cover-item">
                                            <div className="gen-details-cover-flex">
                                                <div className="gen-details-cover-item">
                                                    <div className="gen-details-divider">
                                                        <div className="details-header-cover-flex">
                                                            <div className="details-header-cover-item">
                                                                <h2 className="header-text">Personal Information</h2>
                                                            </div>
                                                        </div>
                                                        <div className="details-content-cover-flex">
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">FULL NAME</p>
                                                                    <p className="value-text">{content.generalDetails.personalInfo.fullname}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">PHONE NUMBER</p>
                                                                    <p className="value-text">{content.generalDetails.personalInfo.phoneno}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">EMAIL ADDRESS</p>
                                                                    <p className="value-text">{content.generalDetails.personalInfo.email}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">BVN</p>
                                                                    <p className="value-text">{content.generalDetails.personalInfo.bvn}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">GENDER</p>
                                                                    <p className="value-text">{content.generalDetails.personalInfo.gender}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">MARITAL STATUS</p>
                                                                    <p className="value-text">{content.generalDetails.personalInfo.maritalStatus}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">CHILDREN</p>
                                                                    <p className="value-text">{content.generalDetails.personalInfo.children}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">TYPE OF RESIDENCE</p>
                                                                    <p className="value-text">{content.generalDetails.personalInfo.typeOfResidence}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Divider />
                                                    <div className="gen-details-divider">
                                                        <div className="details-header-cover-flex">
                                                            <div className="details-header-cover-item">
                                                                <h2 className="header-text">Education and Employment</h2>
                                                            </div>
                                                        </div>
                                                        <div className="details-content-cover-flex">
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">LEVEL OF EDUCATION</p>
                                                                    <p className="value-text">{content.generalDetails.educationAndEmployment.educationLevel}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">EMPLOYMENT STATUS</p>
                                                                    <p className="value-text">{content.generalDetails.educationAndEmployment.employmentStatus}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">SECTOR OF EMPLOYMENT</p>
                                                                    <p className="value-text">{content.generalDetails.educationAndEmployment.employmentSector}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">DURATION OF EMPLOYMENT</p>
                                                                    <p className="value-text">{content.generalDetails.educationAndEmployment.employmentDuration}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">OFFICE EMAIL</p>
                                                                    <p className="value-text">{content.generalDetails.educationAndEmployment.officeEmail}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">MONTHLY INCOME</p>
                                                                    <p className="value-text">{content.generalDetails.educationAndEmployment.monthlyIncomeRange.from} - {content.generalDetails.educationAndEmployment.monthlyIncomeRange.to}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">LOAN REPAYMENT</p>
                                                                    <p className="value-text">{content.generalDetails.educationAndEmployment.loanRepayment}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Divider />
                                                    <div className="gen-details-divider">
                                                        <div className="details-header-cover-flex">
                                                            <div className="details-header-cover-item">
                                                                <h2 className="header-text">Socials</h2>
                                                            </div>
                                                        </div>
                                                        <div className="details-content-cover-flex">
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">TWITTER</p>
                                                                    <p className="value-text">{content.generalDetails.socials.twitter}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">FACEBOOK</p>
                                                                    <p className="value-text">{content.generalDetails.socials.facebook}</p>
                                                                </div>
                                                            </div>
                                                            <div className="details-content-cover-item">
                                                                <div className="details-text-cover">
                                                                    <p className="key-text">INSTAGRAM</p>
                                                                    <p className="value-text">{content.generalDetails.socials.instagram}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Divider />
                                                    <div className="gen-details-divider">
                                                        <div className="details-header-cover-flex">
                                                            <div className="details-header-cover-item">
                                                                <h2 className="header-text">Guarantor</h2>
                                                            </div>
                                                        </div>
                                                        <div className="guarantor-cover-flex">
                                                            {
                                                                content.generalDetails.guarantors.map((guarantor:any, index:number) => {

                                                                    return (
                                                                        <>
                                                                            <div className="guarantor-cover-item" key={index}>
                                                                                <div className="details-content-cover-flex">
                                                                                    <div className="details-content-cover-item">
                                                                                        <div className="details-text-cover">
                                                                                            <p className="key-text">FULL NAME</p>
                                                                                            <p className="value-text">{guarantor.fullname}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="details-content-cover-item">
                                                                                        <div className="details-text-cover">
                                                                                            <p className="key-text">PHONE NUMBER</p>
                                                                                            <p className="value-text">{guarantor.phoneno}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="details-content-cover-item">
                                                                                        <div className="details-text-cover">
                                                                                            <p className="key-text">EMAIL ADDRESS</p>
                                                                                            <p className="value-text">{guarantor.emailAddress}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="details-content-cover-item">
                                                                                        <div className="details-text-cover">
                                                                                            <p className="key-text">RELATIONSHIP</p>
                                                                                            <p className="value-text">{guarantor.relationship}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {index === 0 && <Divider />}
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={tabValue} index={1}>
                                    Documents
                                </CustomTabPanel>
                                <CustomTabPanel value={tabValue} index={2}>
                                    Bank Details
                                </CustomTabPanel>
                                <CustomTabPanel value={tabValue} index={3}>
                                    Loans
                                </CustomTabPanel>
                                <CustomTabPanel value={tabValue} index={4}>
                                    Savings
                                </CustomTabPanel>
                                <CustomTabPanel value={tabValue} index={5}>
                                    App and System
                                </CustomTabPanel>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        </>
    )
}