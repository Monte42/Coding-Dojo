
const Financials = ({financials,setFinancials}) => {

    return (
        <div>
            <h2>Financials</h2>
            { Object.keys(financials).length === 0 ?  <h3>Loading....</h3> :
                <div className='row'>
                    <div className='col-6'>
                            <>
                                {financials.balance_sheet.assets.label &&
                                    <p>{financials.balance_sheet.assets.label}: ${financials.balance_sheet.assets.value}</p>
                                }
                                {financials.balance_sheet.current_assets.label &&
                                    <p>{financials.balance_sheet.current_assets.label}: ${financials.balance_sheet.current_assets.value}</p>
                                }
                                {financials.balance_sheet.liabilities.label &&
                                    <p>{financials.balance_sheet.liabilities.label}: ${financials.balance_sheet.liabilities.value}</p>
                                }
                                {financials.balance_sheet.current_liabilities.label &&
                                    <p>{financials.balance_sheet.current_liabilities.label}: ${financials.balance_sheet.current_liabilities.value}</p>
                                }
                                {financials.balance_sheet.equity.label &&
                                    <p>{financials.balance_sheet.equity.label}: ${financials.balance_sheet.equity.value}</p>
                                }
                                {financials.balance_sheet.fixed_assets.label &&
                                    <p>{financials.balance_sheet.fixed_assets.label}: ${financials.balance_sheet.fixed_assets.value}</p>
                                }
                            </>
                            <>
                                {financials.comprehensive_income.comprehensive_income_loss.label &&
                                    <p>{financials.comprehensive_income.comprehensive_income_loss.label}: ${financials.comprehensive_income.comprehensive_income_loss.value}</p>
                                }
                                {financials.comprehensive_income.other_comprehensive_income_loss.label &&
                                    <p>{financials.comprehensive_income.other_comprehensive_income_loss.label}: ${financials.comprehensive_income.other_comprehensive_income_loss.value}</p>
                                }
                            </>
                    </div>
                    <div className='col-6'>
                            <>
                                {financials.income_statement.basic_earnings_per_share.label &&
                                    <p>{financials.income_statement.basic_earnings_per_share.label}: ${financials.income_statement.basic_earnings_per_share.value}</p>
                                }
                                {financials.income_statement.diluted_earnings_per_share.label &&
                                    <p>{financials.income_statement.diluted_earnings_per_share.label}: ${financials.income_statement.diluted_earnings_per_share.value}</p>
                                }
                                {financials.income_statement.benefits_costs_expenses.label &&
                                    <p>{financials.income_statement.benefits_costs_expenses.label} ${financials.income_statement.benefits_costs_expenses.value}</p>
                                }
                                {financials.income_statement.costs_and_expenses.label &&
                                    <p>{financials.income_statement.costs_and_expenses.label}: ${financials.income_statement.costs_and_expenses.value}</p>
                                }
                                {financials.income_statement.operating_expenses.label &&
                                    <p>{financials.income_statement.operating_expenses.label}: ${financials.income_statement.operating_expenses.value}</p>
                                }
                                {financials.income_statement.interest_expense_operating.label &&
                                    <p>{financials.income_statement.interest_expense_operating.label}: ${financials.income_statement.interest_expense_operating.value}</p>
                                }
                                {financials.income_statement.income_tax_expense_benefit.label &&
                                    <p>{financials.income_statement.income_tax_expense_benefit.label}: ${financials.income_statement.income_tax_expense_benefit.value}</p>
                                }
                                {financials.income_statement.revenues.label &&
                                    <p>{financials.income_statement.revenues.label}: ${financials.income_statement.revenues.value}</p>
                                }
                            </>
                    </div>
                </div>
            }
        </div>
    )
}

export default Financials