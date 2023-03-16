import "./App.css";
import { useEffect, useState } from "react";
import {
  BsMortarboard,
  BsFillPencilFill,
  BsFillTelephoneInboundFill
} from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import {
  MdOutlineWorkOutline,
  MdOutlineLocationOn,
  MdOutlineCancel
} from "react-icons/md";

export default function App() {
  const [state, setState] = useState({
    id: 1,
    role: "admin"
  });
  const [isEditing, setEditing] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <div className={`box-option ${state?.role !== "admin" ? "hidden" : ""}`}>
        <div className="flex gap-10" onClick={() => setEditing(true)}>
          {isEditing ? (
            <button>save</button>
          ) : (
            <>
              <div className="box-option-icon border-50">
                <BsFillPencilFill />
              </div>
              <p>Chỉnh sửa</p>
            </>
          )}
        </div>
        <div className="flex gap-10 ml-auto" onClick={() => setEditing(false)}>
          <div className="bg-cancel box-option-icon border-50">
            <MdOutlineCancel />
          </div>
          <p>Hủy</p>
        </div>
      </div>
      <div>
        <div className="header">
          <div className="header-box">
            <div className="header-left">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                width="150px"
                height="150px"
              />
            </div>
            <div className="header-right">
              <div className="header-right-box">
                {isEditing ? (
                  <input value="Ly Thanh Quyen" />
                ) : (
                  <h3>Ly Thanh Quyen</h3>
                )}
                {isEditing ? <input value="saler" /> : <h4>saler</h4>}
              </div>
            </div>
          </div>
          <div className="box-info">
            <ul>
              <li className="flex gap-10">
                <AiOutlineMail />
                <p>thanhquyenlyltq@gmail.com</p>
              </li>
              <li className="flex gap-10">
                <BsFillTelephoneInboundFill />
                <p>0967923149</p>
              </li>
              <li className="flex gap-10">
                <MdOutlineLocationOn />
                <p>Tam Hạp, xã Thái Bình, huyện Châu Thành, tỉnh Tây Ninh</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="main-left-all">
            <div className="main-left-top">
              <div className="main-left-top-item color-text">
                Thông tin liên hệ
              </div>
              <div className="list-icon-text p-10 text-color">
                <ul>
                  <li>
                    <div className="list-item">
                      <AiOutlineCalendar className="border-icon" />
                      {isEditing ? (
                        <input value="02/01/1999" />
                      ) : (
                        <div>02/01/1999</div>
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                      <AiOutlineCalendar className="border-icon" />
                      {isEditing ? (
                        <input value="02/01/1999" />
                      ) : (
                        <div>02/01/1999</div>
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                      <AiOutlineCalendar className="border-icon" />
                      {isEditing ? (
                        <input value="02/01/1999" />
                      ) : (
                        <div>02/01/1999</div>
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                      <AiOutlineCalendar className="border-icon" />
                      {isEditing ? (
                        <input value="02/01/1999" />
                      ) : (
                        <div>02/01/1999</div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-left-main">
              <div className="main-left-top-item-1 color-text">Kĩ năng</div>
              <div className="main-left-skill text-color">
                <div className="main-left-skill-box ml-40">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Tin học văn phòng" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">
                        Kỹ năng chăm sóc khách hàng
                      </h4>
                    </>
                  )}
                </div>
                <div className="main-left-skill-box ml-40">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Tin học văn phòng" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">Kỹ năng bán hàng</h4>
                    </>
                  )}
                </div>
                <div className="main-left-skill-box ml-40 mt-10">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Tin học văn phòng" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">Kỹ năng xử lý tình huống</h4>
                    </>
                  )}
                </div>
                <div className="main-left-skill-box ml-40 mt-10">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Tin học văn phòng" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">Kỹ năng lắng nghe</h4>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="main-left-main">
              <div className="main-left-top-item-1 color-text">Chứng chỉ</div>
              <div className="main-left-skill text-color">
                <div className="main-left-skill-box ml-40">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Tin học văn phòng" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">Tin học văn phòng</h4>
                      <ul className="main-left-skill-item">
                        <li>
                          Chứng chỉ (chứng chỉ Microsoft Office Specialist
                          (Mos))
                        </li>
                      </ul>
                    </>
                  )}
                </div>
                <div className="main-left-skill-box ml-40 mt-10">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Ngoại ngữ" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">Ngoại ngữ</h4>
                      <ul className="main-left-skill-item">
                        <li>Chứng chỉ Toeic</li>
                      </ul>
                    </>
                  )}
                </div>
                <div className="main-left-skill-box ml-40 mt-10">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Ngoại ngữ" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">Khác</h4>
                      <ul className="main-left-skill-item">
                        <li>
                          Bảng điểm Nghành Quản trị Nhà hàng & Dịch vụ ăn uống
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="main-left-footer">
              <div className="main-left-top-item-2 color-text">Giải thưởng</div>
              <div className="main-left-skill text-color">
                <div className="main-left-skill-box ml-40">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Ngoại ngữ" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">Ngoại ngữ</h4>
                      <ul className="main-left-skill-item">
                        <li>Sử dung thành thạo word, excel</li>
                      </ul>
                    </>
                  )}
                </div>
                <div className="main-left-skill-box ml-40 mt-10">
                  {isEditing ? (
                    <>
                      <h4 className="color-text">
                        <input value="Ngoại ngữ" />
                      </h4>
                      <ul className="main-left-skill-item">
                        <li>
                          {" "}
                          <input value="Sử dung thành thạo word, excel" />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="color-text">Ngoại ngữ</h4>
                      <ul className="main-left-skill-item">
                        <li>Sử dung thành thạo word, excel</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="main-right">
            <div className="main-rigth-all">
              <div className="main-right-top">
                <div className="main-right-top-item w-200 color-text ">
                  Mục tiêu sự nghiệp
                </div>
                <div className="main-content text-color">
                  {isEditing ? (
                    <textarea
                      value="  Được dịch từ tiếng Anh-Mô tả là mô hình phát triển tường thuật
                    nhằm làm sống động một địa điểm, đối tượng, nhân vật hoặc
                    nhóm. Miêu tả là một trong bốn phương thức tu từ, cùng với
                    giải thích, lập luận và tường thuật. Trong thực tế, sẽ rất khó
                    để viết văn học chỉ dựa trên một trong bốn phương thức cơ bản.
                    Được dịch từ tiếng Anh-Mô tả là mô hình phát triển tường thuật
                    nhằm làm sống động một địa điểm, đối tượng, nhân vật hoặc
                    nhóm. Miêu tả là một trong bốn phương thức tu từ, cùng với
                    giải thích, lập luận và tường thuật. Trong thực tế, sẽ rất khó
                    để viết văn học chỉ dựa trên một trong bốn phương thức cơ bản."
                    />
                  ) : (
                    <>
                      <p>
                        - Là một người có tính cách năng động, sôi nổi và có khả
                        năng giao tiếp, nhanh nhẹn, tôi đang trong quá trình tìm
                        kiếm công việc có môi trường năng động để cống hiến và
                        phát huy hết khả năng của mình. <br></br> - Với những
                        kiến thức và kinh nghiệm của bản thân tôi tích luỹ được
                        và khả năng thuyết phục khách hàng sử dụng sản phẩm, tôi
                        tự tin mình có đủ năng lực để ứng tuyển vào vị trí này.{" "}
                        <br></br>- Trong 2 năm tới, tôi hi vọng bản thân sẽ lên
                        được vị trí trưởng phòng sales của công ty, giúp định
                        hướng phòng kinh doanh và tạo ra lợi nhuận cho công ty
                        mình đồng thời cũng sẽ không ngừng để học hỏi các đồng
                        nghiệp, tích lũy thêm nhiều kinh nghiệm và sau đó tiến
                        tới những vị trí quan trọng hơn trong tương lai.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="main-right-footer mr-20">
                <div className="main-right-top-item-1 p-10 color-text w-200 ">
                  Học vấn
                </div>
                <div className="main-right-top-item-main">
                  <div className="main-right-top-item-main-1">
                    <div className="main-right-top-item-main-item-left">
                      <div className="main-right-top-item-main-item-left-1">
                        <BsMortarboard className="custom-icon " />
                      </div>
                      {/* <div className="line"></div>
                      <div className="main-right-top-item-main-item-left-2">
                        <BsMortarboard className="custom-icon " />
                      </div> */}
                    </div>
                    <div className="main-right-top-item-main-item-right">
                      <div className="all">
                        <div className="bg-blue">
                          <div className="main-left-skill ">
                            <div className="main-left-skill-box">
                              {isEditing ? (
                                <>
                                  <h4 className="color-text">
                                    <input value="   Đại học KHTN - ĐHQG - Hà Nội | 2016 - 2022" />
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      <div className="text-color">
                                        <input value="  Quản trị kinh doanh" />
                                      </div>
                                      <p>
                                        <input
                                          value="Tốt nghiệp loại giỏi, điểm trung bình
                                        6.3"
                                        />
                                      </p>
                                    </li>
                                  </ul>
                                </>
                              ) : (
                                <>
                                  <h4 className="color-text">
                                    Đại học Tài Chính - Marketing | 2017 - 2021
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      <div className="text-color">
                                        Quản trị nhà hàng và dịch vụ ăn uống
                                      </div>
                                      <p>Tốt nghiệp loại Khá</p>
                                    </li>
                                  </ul>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-right-main mr-20">
                <div className="main-right-top-item-1 p-10 w-200 color-text">
                  Kinh nghiệm làm việc
                </div>
                <div className="main-right-top-item-main">
                  <div className="main-right-top-item-main-1">
                    <div className="main-right-top-item-main-item-left">
                      <div className="main-right-top-item-main-item-left-1">
                        <MdOutlineWorkOutline className="custom-icon " />
                      </div>
                      <div className="line"></div>
                      <div className="main-right-top-item-main-item-left-2">
                        <MdOutlineWorkOutline className="custom-icon " />
                      </div>
                    </div>
                    <div className="main-right-top-item-main-item-right">
                      <div className="all">
                        <div className="bg-blue">
                          <div className="main-left-skill">
                            <div className="main-left-skill-box">
                              {isEditing ? (
                                <>
                                  <h4 className="color-text">
                                    <input value="Ngoại ngữ" />
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      {" "}
                                      <input value="Sử dung thành thạo word, excel" />
                                    </li>
                                  </ul>
                                </>
                              ) : (
                                <>
                                  <h4 className="color-text">
                                    Công ty FamilyMart | 2018 - 2019
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      <div className="text-color">
                                        Nhân viên bán hàng
                                      </div>
                                      <p>
                                        FamilyMart là hệ thống cửa hàng tiện lợi
                                        của Nhật Bản, những đặc điểm về phong
                                        cách làm việc đáng học hỏi trong suốt
                                        quá trình làm việc tại đây là: Luôn đúng
                                        giờ; làm việc hiệu quả; Tôn trọng quyết
                                        định của đồng nghiệp; Luôn tôn trọng đối
                                        tác; Sẵn sàng nói xin lỗi, cảm ơn; tôn
                                        trọng học tập từ tiền bối; Nguyên tác,
                                        kỷ luật; Không ngừng nổ lực làm việc,
                                        ... Công việc mà tôi đã được trải nghiệm
                                        ở đây là bán hàng, trưng bày sản phẩm,
                                        thu ngân, giải đáp thắc mắc của khách
                                        hàng về sản phẩm tại cửa hàng, sử dụng
                                        truyền thông để đạt được doanh số bán
                                        hàng trong những dịp chạy doanh số.
                                      </p>
                                    </li>
                                  </ul>
                                </>
                              )}
                            </div>
                            <div className="main-left-skill-box">
                              {isEditing ? (
                                <>
                                  <h4 className="color-text">
                                    <input value="Ngoại ngữ" />
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      {" "}
                                      <input value="Sử dung thành thạo word, excel" />
                                    </li>
                                  </ul>
                                </>
                              ) : (
                                <>
                                  <h4 className="color-text">
                                    Nhà hàng Hum Lounge Vegetarian | 2021{" "}
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      <div className="text-color">
                                        Nhân viên hậu cần
                                      </div>
                                      <p>
                                        - Bán hàng trực tiếp tại cửa hàng cho
                                        người nước ngoài và người Việt. - Lập
                                        báo cáo sản lượng bán ra hàng ngày và
                                        quảng bá sản phẩm trực tiếp với khách
                                        hàng, giới thiệu các sản phẩm mới. -
                                        Giải quyết nhanh các vấn đề liên quan
                                        đến khách hàng và các sự cố ảnh hưởng
                                        đến nhà hàng. Vì lí do dịch bệnh nên tôi
                                        đã không thể gắn bó thêm với quý công ty
                                        nhưng tôi đã học hỏi được rất nhiều từ
                                        khả năng giao tiếp đến kĩ năng bán hàng.
                                        Bên cạnh đó là cung cách phục vụ theo
                                        phong cách nhà hàng 4 sao.
                                      </p>
                                    </li>
                                  </ul>
                                </>
                              )}
                            </div>
                            <div className="main-left-skill-box">
                              {isEditing ? (
                                <>
                                  <h4 className="color-text">
                                    <input value="Ngoại ngữ" />
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      {" "}
                                      <input value="Sử dung thành thạo word, excel" />
                                    </li>
                                  </ul>
                                </>
                              ) : (
                                <>
                                  <h4 className="color-text">
                                    Minh Phúc Telecom | 2022
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      <div className="text-color">
                                        Tổng đài viên bộ phận chăm sóc khách
                                        hàng ban vận hành Vinaphone
                                      </div>
                                      <p>
                                        - Giải đáp mọi thắc mắc liên quan đến
                                        gói cước, sim số của khách hàng đang sử
                                        dụng dịch vụ của nhà mạng Vinaphone. -
                                        Giới thiệu, tư vấn dịch vụ mới sản phẩm
                                        mới và chương trình ưu đãi Vinaphone
                                        đang triển khai để đề xuất khách hàng sử
                                        dụng. - Là bộ phận tiếp nhận khiếu nại
                                        của khách hàng trong quy trình giải
                                        quyết khiếu nại. - Chăm sóc khách hàng,
                                        xoa dịu những khách hàng có những trải
                                        nghiệm không tốt về sản phẩm hay dịch
                                        vụ.
                                      </p>
                                    </li>
                                  </ul>
                                </>
                              )}
                            </div>
                            <div className="main-left-skill-box">
                              {isEditing ? (
                                <>
                                  <h4 className="color-text">
                                    <input value="Ngoại ngữ" />
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      {" "}
                                      <input value="Sử dung thành thạo word, excel" />
                                    </li>
                                  </ul>
                                </>
                              ) : (
                                <>
                                  <h4 className="color-text">
                                    Công ty cổ phần công nghệ Kiotviet | 2022 -
                                    2023
                                  </h4>
                                  <ul className="main-left-skill-item">
                                    <li>
                                      <div className="text-color">
                                        Nhân viên kinh doanh
                                      </div>
                                      <p>
                                        - Liên hệ với khách hàng thông qua data
                                        có sẵn để giới thiệu, thuyết phục khách
                                        hàng nhập hàng thông qua sàn sỉ Kiotviet
                                        connect. - Trao đổi với khách hàng qua
                                        điện thoại để tư vấn và hướng dẫn thao
                                        tác nhập hàng trên Kiotviet connect. -
                                        Chốt đơn và duy trì mối quan hệ với
                                        khách hàng. - Hổ trợ khách hàng và xử lý
                                        các vấn đề phát sinh liên quan đến đơn
                                        hàng. - Chăm sóc khách hàng để khách
                                        hàng gắn bó lâu dài với sàn Kiotviet
                                        connect.
                                      </p>
                                    </li>
                                  </ul>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Bản quyền thuộc Lý Thanh quyền</p>
      </div>
    </div>
  );
}