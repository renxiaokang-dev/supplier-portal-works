// 多语言配置
const i18n = {
    zh: {
        // 导航
        home: '首页',
        dispatch: '派送管理',
        finance: '账务管理',
        merchant: '商户管理',
        changePassword: '修改密码',
        logout: '退出登录',
        
        // POD申诉页面
        workOrder: '工单管理',
        podPenalty: 'POD不合格',
        podErrorCount: 'POD错误单量',
        penaltyAmount: '处罚金额',
        trackingNo: '运单号',
        appealStatus: '申诉状态',
        inspectDateFrom: '查验日期（从）',
        inspectDateTo: '查验日期（至）',
        pleaseEnterTrackingNo: '请输入运单号',
        pleaseSelect: '请选择',
        query: '查询',
        reset: '重置',
        exportExcel: '导出Excel',
        batchAppeal: '批量申诉',
        
        // 新增菜单项
        quote: '报价管理',
        uploadQuote: '上传报价单',
        queryQuote: '报价单查询',
        forecast: '货量预测',
        boxManagement: '分箱管理',
        boxArchive: '子箱档案',
        boxDeliveryStats: '子分箱配送统计',
        driverManagement: '司机管理',
        driverArchive: '司机档案',
        waybillStats: '运单统计',
        returnWarehouseQuery: '待返仓运单查询',
        
        // 申诉状态
        allStatus: '全部状态',
        pending: '待申诉',
        reviewing: '审批中',
        approved: '申诉通过',
        rejected: '申诉失败',
        autoApproved: '超期自动认可',
        
        // 批量操作
        batchImport: '批量导入',
        selectedCount: '已选',
        items: '项',
        batchAppealTitle: '批量申诉',
        batchAppealConfirm: '确认对选中的运单进行批量申诉？',
        importTitle: '批量导入',
        importTip: '请上传Excel文件（.xlsx/.xls），包含运单号和申诉信息',
        downloadTemplate: '下载模板',
        selectFile: '选择文件',
        uploading: '导入中...',
        startImport: '开始导入',
        cancel: '取消',
        submit: '提交申诉',
        
        // 更多筛选 & 列管理
        moreFilters: '更多查询',
        lessFilters: '收起',
        errorReasonLabel: 'POD错误原因',
        warehouseLabel: '提货仓库',
        boxCreateDateLabel: '分箱创建日期',
        zoneLabel: '所属网格',
        boxNoLabel: '分箱号',
        signDateLabel: '签收日期',
        workOrderNoLabel: '工单编号',
        customColumns: '自定义列',
        colTrackingNo: '运单号',
        colAddress: '地址',
        colPhotos: 'POD照片',
        colErrorReason: 'POD错误原因',
        colPenaltyAmount: '处罚金额',
        colInspectDate: '查验日期',
        colAppealType: '申诉类型',
        colAppealReason: '申诉原因',
        colAppealAttachment: '申诉附件',
        colAppealStatus: '申诉状态',
        colWarehouse: '提货仓库',
        colBoxCreateDate: '分箱创建日期',
        colSignDate: '签收日期',
        colZone: '所属网格',
        colBoxNo: '分箱号',
        colWorkOrderNo: '工单编号',
        colDriver: '司机编号',
        all: '全部',
        multiTrackingTip: '多个运单号用换行或逗号分隔',
        appealDeadline: '截止申诉日期',
        remainingDays: '剩余申诉时间',
        reviewTime: '审核时间',
        days: '天',
        hours: '小时',
        expired: '已逾期',
        viewDetail: '查看详情',
        
        // 登录
        login: '登录',
        passwordLogin: '密码登录',
        codeLogin: '验证码登录',
        username: '用户名/邮箱/手机号',
        password: '密码',
        agreePolicy: '我已阅读并同意',
        privacyPolicy: '隐私政策',
        loggingIn: '登录中...',
        
        // 分页
        showing: '显示',
        of: '条，共',
        records: '条',
        prevPage: '上一页',
        nextPage: '下一页',
        perPage: '条/页',
        
        // 下载中心
        downloadCenter: '下载中心',
        exportTasks: '导出任务',
        allTasks: '全部',
        processing: '进行中',
        completed: '已完成',
        failed: '失败',
        taskName: '任务名称',
        taskStatus: '状态',
        fileSize: '文件大小',
        createTime: '创建时间',
        completeTime: '完成时间',
        expiryTime: '有效期',
        download: '下载',
        delete: '删除',
        retry: '重试',
        cancel: '取消',
        viewDetail: '查看详情',
        expiresIn: '剩余',
        expired: '已过期',
        noTasks: '暂无导出任务',
        exportCreated: '导出任务已创建，请在下载中心查看进度',
        confirmDelete: '确认删除此任务？',
        taskDeleted: '任务已删除',
        taskCancelled: '任务已取消',
        downloading: '下载中...'
    },
    en: {
        // Navigation
        home: 'Home',
        dispatch: 'Dispatch',
        finance: 'Finance',
        merchant: 'Merchant',
        changePassword: 'Change Password',
        logout: 'Logout',
        
        // POD Penalty Page
        workOrder: 'Work Order',
        podPenalty: 'POD Non-compliance',
        podErrorCount: 'POD Error Count',
        penaltyAmount: 'Penalty Amount',
        trackingNo: 'Tracking No.',
        appealStatus: 'Appeal Status',
        inspectDateFrom: 'Inspect Date (From)',
        inspectDateTo: 'Inspect Date (To)',
        pleaseEnterTrackingNo: 'Enter tracking number',
        pleaseSelect: 'Please select',
        query: 'Query',
        reset: 'Reset',
        exportExcel: 'Export Excel',
        batchAppeal: 'Batch Appeal',
        
        // New Menu Items
        quote: 'Quote Management',
        uploadQuote: 'Upload Quote',
        queryQuote: 'Query Quote',
        forecast: 'Volume Forecast',
        boxManagement: 'Box Management',
        boxArchive: 'Sub-box Archive',
        boxDeliveryStats: 'Sub-box Delivery Stats',
        driverManagement: 'Driver Management',
        driverArchive: 'Driver Archive',
        waybillStats: 'Waybill Statistics',
        returnWarehouseQuery: 'Return Warehouse Query',
        
        // Appeal Status
        allStatus: 'All Status',
        pending: 'Pending',
        reviewing: 'Under Review',
        approved: 'Approved',
        rejected: 'Rejected',
        autoApproved: 'Auto Approved',
        
        // Batch Operations
        batchImport: 'Batch Import',
        selectedCount: 'Selected',
        items: 'items',
        batchAppealTitle: 'Batch Appeal',
        batchAppealConfirm: 'Confirm batch appeal for selected waybills?',
        importTitle: 'Batch Import',
        importTip: 'Upload Excel file (.xlsx/.xls) with tracking numbers and appeal info',
        downloadTemplate: 'Download Template',
        selectFile: 'Select File',
        uploading: 'Importing...',
        startImport: 'Start Import',
        cancel: 'Cancel',
        submit: 'Submit Appeal',
        
        // More Filters & Column Management
        moreFilters: 'More Filters',
        lessFilters: 'Less',
        errorReasonLabel: 'POD Error Reason',
        warehouseLabel: 'Warehouse',
        boxCreateDateLabel: 'Box Create Date',
        zoneLabel: 'Zone',
        boxNoLabel: 'Box No.',
        signDateLabel: 'Sign Date',
        workOrderNoLabel: 'Work Order No.',
        customColumns: 'Columns',
        colTrackingNo: 'Tracking No.',
        colAddress: 'Address',
        colPhotos: 'POD Photos',
        colErrorReason: 'POD Error Reason',
        colPenaltyAmount: 'Penalty Amount',
        colInspectDate: 'Inspect Date',
        colAppealType: 'Appeal Type',
        colAppealReason: 'Appeal Reason',
        colAppealAttachment: 'Attachment',
        colAppealStatus: 'Appeal Status',
        colWarehouse: 'Warehouse',
        colBoxCreateDate: 'Box Create Date',
        colSignDate: 'Sign Date',
        colZone: 'Zone',
        colBoxNo: 'Box No.',
        colWorkOrderNo: 'Work Order No.',
        colDriver: 'Driver ID',
        all: 'All',
        multiTrackingTip: 'Separate multiple tracking numbers with line breaks or commas',
        appealDeadline: 'Appeal Deadline',
        remainingDays: 'Remaining Appeal Time',
        reviewTime: 'Review Time',
        days: 'days',
        hours: 'hours',
        expired: 'Expired',
        viewDetail: 'View Detail',
        // Login
        login: 'Login',
        passwordLogin: 'Password Login',
        codeLogin: 'Code Login',
        username: 'Username/Email/Phone',
        password: 'Password',
        agreePolicy: 'I have read and agree to',
        privacyPolicy: 'Privacy Policy',
        loggingIn: 'Logging in...',
        
        // Pagination
        showing: 'Showing',
        of: 'of',
        records: 'records',
        prevPage: 'Previous',
        nextPage: 'Next',
        perPage: '/ page',
        
        // Download Center
        downloadCenter: 'Download Center',
        exportTasks: 'Export Tasks',
        allTasks: 'All',
        processing: 'Processing',
        completed: 'Completed',
        failed: 'Failed',
        taskName: 'Task Name',
        taskStatus: 'Status',
        fileSize: 'File Size',
        createTime: 'Created',
        completeTime: 'Completed',
        expiryTime: 'Expires',
        download: 'Download',
        delete: 'Delete',
        retry: 'Retry',
        cancel: 'Cancel',
        viewDetail: 'View Detail',
        expiresIn: 'Expires in',
        expired: 'Expired',
        noTasks: 'No export tasks',
        exportCreated: 'Export task created, check progress in Download Center',
        confirmDelete: 'Confirm delete this task?',
        taskDeleted: 'Task deleted',
        taskCancelled: 'Task cancelled',
        downloading: 'Downloading...'
    },
    es: {
        // Navegación
        home: 'Inicio',
        dispatch: 'Despacho',
        finance: 'Finanzas',
        merchant: 'Comerciante',
        changePassword: 'Cambiar Contraseña',
        logout: 'Cerrar Sesión',
        
        // Página de Penalización POD
        workOrder: 'Orden de Trabajo',
        podPenalty: 'POD No Conforme',
        podErrorCount: 'Cantidad de Errores POD',
        penaltyAmount: 'Monto de Penalización',
        trackingNo: 'Nº de Seguimiento',
        appealStatus: 'Estado de Apelación',
        inspectDateFrom: 'Fecha de Inspección (Desde)',
        inspectDateTo: 'Fecha de Inspección (Hasta)',
        pleaseEnterTrackingNo: 'Ingrese número de seguimiento',
        pleaseSelect: 'Por favor seleccione',
        query: 'Consultar',
        reset: 'Restablecer',
        exportExcel: 'Exportar Excel',
        batchAppeal: 'Apelación por Lotes',
        
        // Nuevos Elementos del Menú
        quote: 'Gestión de Cotizaciones',
        uploadQuote: 'Subir Cotización',
        queryQuote: 'Consultar Cotización',
        forecast: 'Pronóstico de Volumen',
        boxManagement: 'Gestión de Cajas',
        boxArchive: 'Archivo de Sub-cajas',
        boxDeliveryStats: 'Estadísticas de Entrega',
        driverManagement: 'Gestión de Conductores',
        driverArchive: 'Archivo de Conductores',
        waybillStats: 'Estadísticas de Guías',
        returnWarehouseQuery: 'Consulta de Devoluciones',
        
        // Estado de Apelación
        allStatus: 'Todos los Estados',
        pending: 'Pendiente',
        reviewing: 'En Revisión',
        approved: 'Aprobado',
        rejected: 'Rechazado',
        autoApproved: 'Aprobado Automático',
        
        // Operaciones por Lotes
        batchImport: 'Importar por Lotes',
        selectedCount: 'Seleccionados',
        items: 'elementos',
        batchAppealTitle: 'Apelación por Lotes',
        batchAppealConfirm: '¿Confirmar apelación por lotes para los envíos seleccionados?',
        importTitle: 'Importar por Lotes',
        importTip: 'Suba archivo Excel (.xlsx/.xls) con números de seguimiento e información de apelación',
        downloadTemplate: 'Descargar Plantilla',
        selectFile: 'Seleccionar Archivo',
        uploading: 'Importando...',
        startImport: 'Iniciar Importación',
        cancel: 'Cancelar',
        submit: 'Enviar Apelación',
        
        // Más Filtros & Gestión de Columnas
        moreFilters: 'Más Filtros',
        lessFilters: 'Menos',
        errorReasonLabel: 'Razón de Error POD',
        warehouseLabel: 'Almacén',
        boxCreateDateLabel: 'Fecha Creación Caja',
        zoneLabel: 'Zona',
        boxNoLabel: 'Nº de Caja',
        signDateLabel: 'Fecha de Firma',
        workOrderNoLabel: 'Nº Orden de Trabajo',
        customColumns: 'Columnas',
        colTrackingNo: 'Nº Seguimiento',
        colAddress: 'Dirección',
        colPhotos: 'Fotos POD',
        colErrorReason: 'Razón Error POD',
        colPenaltyAmount: 'Monto Penalización',
        colInspectDate: 'Fecha Inspección',
        colAppealType: 'Tipo Apelación',
        colAppealReason: 'Razón Apelación',
        colAppealAttachment: 'Adjuntos',
        colAppealStatus: 'Estado Apelación',
        colWarehouse: 'Almacén',
        colBoxCreateDate: 'Fecha Creación Caja',
        colSignDate: 'Fecha Firma',
        colZone: 'Zona',
        colBoxNo: 'Nº Caja',
        colWorkOrderNo: 'Nº Orden Trabajo',
        colDriver: 'ID Conductor',
        all: 'Todos',
        multiTrackingTip: 'Separe múltiples números con saltos de línea o comas',
        appealDeadline: 'Fecha Límite Apelación',
        remainingDays: 'Tiempo Restante Apelación',
        reviewTime: 'Tiempo Revisión',
        days: 'días',
        hours: 'horas',
        expired: 'Vencido',
        viewDetail: 'Ver Detalle',
        // Inicio de Sesión
        login: 'Iniciar Sesión',
        passwordLogin: 'Inicio con Contraseña',
        codeLogin: 'Inicio con Código',
        username: 'Usuario/Email/Teléfono',
        password: 'Contraseña',
        agreePolicy: 'He leído y acepto',
        privacyPolicy: 'Política de Privacidad',
        loggingIn: 'Iniciando sesión...',
        
        // Paginación
        showing: 'Mostrando',
        of: 'de',
        records: 'registros',
        prevPage: 'Anterior',
        nextPage: 'Siguiente',
        perPage: '/ página',
        
        // Centro de Descargas
        downloadCenter: 'Centro de Descargas',
        exportTasks: 'Tareas de Exportación',
        allTasks: 'Todas',
        processing: 'En Proceso',
        completed: 'Completadas',
        failed: 'Fallidas',
        taskName: 'Nombre de Tarea',
        taskStatus: 'Estado',
        fileSize: 'Tamaño',
        createTime: 'Creado',
        completeTime: 'Completado',
        expiryTime: 'Expira',
        download: 'Descargar',
        delete: 'Eliminar',
        retry: 'Reintentar',
        cancel: 'Cancelar',
        viewDetail: 'Ver Detalle',
        expiresIn: 'Expira en',
        expired: 'Expirado',
        noTasks: 'No hay tareas de exportación',
        exportCreated: 'Tarea de exportación creada, verifique el progreso en el Centro de Descargas',
        confirmDelete: '¿Confirmar eliminar esta tarea?',
        taskDeleted: 'Tarea eliminada',
        taskCancelled: 'Tarea cancelada',
        downloading: 'Descargando...'
    }
};

const { createApp } = Vue;

// 登录页组件
const LoginPage = {
    template: `
        <div class="min-h-screen flex">
            <div class="hidden lg:flex lg:w-1/2 bg-primary p-12 text-white flex-col justify-center">
                <h1 class="text-4xl font-bold mb-4">供应商门户</h1>
                <p class="text-xl mb-8">Supplier Portal</p>
                <div class="space-y-4">
                    <div class="bg-white/10 p-4">
                        <div class="text-3xl font-bold">10,000+</div>
                        <div class="text-sm">活跃供应商</div>
                    </div>
                </div>
            </div>
            
            <div class="flex-1 flex items-center justify-center p-8">
                <div class="w-full max-w-md">
                    <div class="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
                        <h2 class="text-2xl font-bold text-gray-800 mb-6">登录</h2>
                        
                        <div class="flex border-b mb-6">
                            <button @click="loginType = 'password'" 
                                    :class="['flex-1 py-2 text-center', loginType === 'password' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500']">
                                密码登录
                            </button>
                            <button @click="loginType = 'code'" 
                                    :class="['flex-1 py-2 text-center', loginType === 'code' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500']">
                                验证码登录
                            </button>
                        </div>

                        <div v-if="loginType === 'password'" class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">用户名/邮箱/手机号</label>
                                <input v-model="username" type="text" class="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-primary rounded-md">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">密码</label>
                                <input v-model="password" type="password" class="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-primary rounded-md">
                            </div>
                        </div>
                        
                        <div class="mt-4">
                            <label class="flex items-center">
                                <input v-model="agreePolicy" type="checkbox" class="mr-2">
                                <span class="text-sm text-gray-600">我已阅读并同意 <a href="#" class="text-primary">隐私政策</a></span>
                            </label>
                        </div>
                        
                        <button @click="login" :disabled="!agreePolicy" class="w-full mt-6 py-2 bg-primary text-white hover:bg-primary-dark disabled:bg-gray-300 rounded-md transition-colors">
                            {{ loading ? '登录中...' : '登录' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            loginType: 'password',
            username: '',
            password: '',
            agreePolicy: false,
            loading: false
        }
    },
    methods: {
        login() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.$emit('navigate', 'main');
            }, 1000);
        }
    }
};

// 主应用布局组件
const MainLayout = {
    template: `
        <div class="min-h-screen bg-gray-100">
            <header class="fixed top-0 left-0 right-0" style="background-color: #0b5699; z-index: 100; overflow: visible;">
                <div class="h-16 relative px-6" style="overflow: visible;">
                    <!-- Logo - 绝对定位，底部对齐，稍微小一点，往左移动 -->
                    <div class="absolute left-0 bottom-0 z-10">
                        <img src="icon/logo_up_cn.svg" alt="供应商门户" class="h-16 w-auto">
                    </div>
                    
                    <!-- 菜单和用户信息 - 垂直居中，在logo后面 -->
                    <div class="h-full flex items-center justify-between relative z-0" style="overflow: visible;">
                        <!-- 左侧主导航菜单 - 在logo右边 -->
                        <nav class="flex gap-2 ml-64">
                            <a v-for="item in mainNav" :key="item.key" @click.prevent="activeMainNav = item.key" href="#"
                               :class="['text-white text-sm px-4 py-2 rounded-md transition-colors', activeMainNav === item.key ? 'bg-[#acc83c26]' : 'hover:bg-white/10']"
                               :style="activeMainNav === item.key ? 'color: #c8e550;' : ''">
                                {{ t(item.key) }}
                            </a>
                        </nav>
                        
                        <!-- 右侧语言切换和用户信息 -->
                        <div class="flex items-center gap-3">
                            <!-- 下载中心 -->
                            <div class="relative">
                                <button @click="showDownloadCenter = !showDownloadCenter" class="relative text-white text-sm px-3 py-2 rounded-md transition-colors hover:bg-white/10 flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                                    </svg>
                                    <span class="hidden lg:inline">{{ t('downloadCenter') }}</span>
                                    <span v-if="unreadTaskCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{{ unreadTaskCount }}</span>
                                </button>
                            </div>
                            
                            <div class="relative">
                                <button @click="showLangMenu = !showLangMenu" class="text-white text-sm px-4 py-2 rounded-md transition-colors flex items-center gap-1.5 hover:bg-white/10">
                                    <span>{{ currentLangLabel }}</span>
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                                <teleport to="body">
                                    <div v-if="showLangMenu" class="fixed w-40 bg-white border border-gray-200 rounded-lg shadow-xl" style="top: 60px; right: 160px; z-index: 9999;">
                                        <a v-for="lang in languages" :key="lang.code" 
                                           @click="changeLang(lang.code)" 
                                           :class="['block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer', currentLang === lang.code ? 'bg-blue-50 text-primary font-medium' : 'text-gray-700']">
                                            {{ lang.label }}
                                        </a>
                                    </div>
                                </teleport>
                            </div>
                            <div class="relative">
                                <button @click="showUserMenu = !showUserMenu" class="flex items-center gap-2 text-white text-sm px-3 py-2 rounded-md transition-colors hover:bg-white/10">
                                    <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center text-primary text-xs">👤</div>
                                    <span>Admin</span>
                                </button>
                                <teleport to="body">
                                    <div v-if="showUserMenu" class="fixed w-48 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden" style="top: 60px; right: 8px; z-index: 9999;">
                                        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">{{ t('changePassword') }}</a>
                                        <a href="#" @click.prevent="logout" class="block px-4 py-2 text-red-600 hover:bg-gray-100">{{ t('logout') }}</a>
                                    </div>
                                </teleport>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 黄绿色过渡条 - 无缝连接 -->
                <div class="h-4 relative bg-accent">
                    <img src="icon/logo_down.svg" alt="" class="absolute left-0 top-0 h-full w-auto">
                </div>
            </header>
            
            <div class="pt-20 flex min-h-screen">
                <aside class="fixed left-0 top-20 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
                    <nav class="p-4">
                        <div v-for="menu in sideMenus" :key="menu.key" class="mb-1">
                            <div @click="toggleMenu(menu.key)" 
                                 :class="['flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors', 
                                          menu.children && expandedMenus.includes(menu.key) ? 'bg-gray-50 font-medium' : '']">
                                <span class="text-sm">{{ t(menu.key) }}</span>
                                <svg v-if="menu.children" class="w-4 h-4 transition-transform" :class="expandedMenus.includes(menu.key) ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </div>
                            <div v-if="menu.children && expandedMenus.includes(menu.key)" class="ml-2 mt-1 space-y-0.5">
                                <a v-for="child in menu.children" :key="child.key" @click.prevent="currentPage = child.key" href="#"
                                   :class="['block pl-4 pr-3 py-2 text-sm rounded-r-lg transition-all relative', 
                                            currentPage === child.key ? 'text-primary font-medium bg-gradient-to-r from-primary/10 to-transparent border-l-2 border-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
                                    {{ t(child.key) }}
                                </a>
                            </div>
                        </div>
                    </nav>
                </aside>
                
                <main class="ml-64 flex-1 p-6 min-w-0 overflow-x-hidden">
                    <component :is="currentPageComponent" :lang="currentLang" ref="podPenaltyPage"></component>
                </main>
            </div>
            
            <!-- 待申诉提醒弹窗 -->
            <div v-if="showPendingAlert" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4">
                <div class="bg-white w-full max-w-2xl rounded-lg shadow-2xl">
                    <!-- 标题栏 -->
                    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-800">燕文重要提示</h3>
                        <button @click="closePendingAlert" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                    </div>
                    
                    <!-- 提示内容 -->
                    <div class="px-6 py-5 max-h-[60vh] overflow-y-auto">
                        <div class="space-y-4">
                            <!-- POD申诉提示 -->
                            <div class="flex gap-3">
                                <div class="flex-shrink-0 mt-0.5">
                                    <span class="inline-flex items-center justify-center w-5 h-5 text-sm font-medium text-white bg-orange-500 rounded-full">1</span>
                                </div>
                                <div class="flex-1">
                                    <div class="text-sm text-gray-700 leading-relaxed">
                                        <span class="font-medium text-gray-800">【POD申诉待处理】</span>
                                        您有 <span class="text-orange-600 font-bold">{{ pendingCount }}</span> 条POD运单待申诉，请及时处理，避免逾期影响账务结算。
                                    </div>
                                    <div class="mt-2">
                                        <button @click="goToPendingAppeals" class="text-primary hover:text-primary-dark text-sm font-medium">
                                            立即查看 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 预留其他提示位置 -->
                            <!-- 示例：未来可以添加更多提示 -->
                            <!--
                            <div class="flex gap-3">
                                <div class="flex-shrink-0 mt-0.5">
                                    <span class="inline-flex items-center justify-center w-5 h-5 text-sm font-medium text-white bg-blue-500 rounded-full">2</span>
                                </div>
                                <div class="flex-1">
                                    <div class="text-sm text-gray-700 leading-relaxed">
                                        <span class="font-medium text-gray-800">【其他提示标题】</span>
                                        提示内容...
                                    </div>
                                    <div class="mt-2">
                                        <button class="text-primary hover:text-primary-dark text-sm font-medium">
                                            查看详情 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                            -->
                        </div>
                    </div>
                    
                    <!-- 底部按钮 -->
                    <div class="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
                        <button @click="closePendingAlert" class="px-5 py-2 bg-white border border-gray-300 text-gray-700 text-sm hover:bg-gray-50 rounded-md transition-colors">
                            我知道了
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- 下载中心侧边抽屉 -->
            <teleport to="body">
                <div v-if="showDownloadCenter" class="fixed inset-0 z-[10000]">
                    <!-- 遮罩层 -->
                    <div @click="showDownloadCenter = false" class="absolute inset-0 bg-black/50"></div>
                    
                    <!-- 侧边抽屉 -->
                    <div class="absolute right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl flex flex-col">
                        <!-- 头部 -->
                        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
                            <h2 class="text-lg font-semibold text-gray-800">{{ t('downloadCenter') }}</h2>
                            <button @click="showDownloadCenter = false" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                        </div>
                        
                        <!-- 标签页 -->
                        <div class="flex border-b border-gray-200 bg-gray-50 px-6">
                            <button @click="activeTaskTab = 'all'" :class="['px-4 py-3 text-sm font-medium border-b-2 transition-colors', activeTaskTab === 'all' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700']">
                                {{ t('allTasks') }} <span class="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-gray-200">{{ exportTasks.length }}</span>
                            </button>
                            <button @click="activeTaskTab = 'processing'" :class="['px-4 py-3 text-sm font-medium border-b-2 transition-colors', activeTaskTab === 'processing' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700']">
                                {{ t('processing') }} <span class="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">{{ processingTaskCount }}</span>
                            </button>
                            <button @click="activeTaskTab = 'completed'" :class="['px-4 py-3 text-sm font-medium border-b-2 transition-colors', activeTaskTab === 'completed' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700']">
                                {{ t('completed') }} <span class="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-green-100 text-green-600">{{ completedTaskCount }}</span>
                            </button>
                            <button @click="activeTaskTab = 'failed'" :class="['px-4 py-3 text-sm font-medium border-b-2 transition-colors', activeTaskTab === 'failed' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700']">
                                {{ t('failed') }} <span class="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">{{ failedTaskCount }}</span>
                            </button>
                        </div>
                        
                        <!-- 任务列表 -->
                        <div class="flex-1 overflow-y-auto p-6">
                            <div v-if="filteredTasks.length === 0" class="flex flex-col items-center justify-center h-full text-gray-400">
                                <svg class="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                                <p class="text-sm">{{ t('noTasks') }}</p>
                            </div>
                            
                            <div v-else class="space-y-3">
                                <div v-for="task in filteredTasks" :key="task.id" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <!-- 任务头部 -->
                                    <div class="flex items-start justify-between mb-3">
                                        <div class="flex items-start gap-3 flex-1">
                                            <div class="text-2xl">📊</div>
                                            <div class="flex-1 min-w-0">
                                                <h3 class="text-sm font-medium text-gray-800 truncate">{{ task.fileName }}</h3>
                                                <div class="flex items-center gap-2 mt-1">
                                                    <span :class="['text-xs px-2 py-0.5 rounded-full', getTaskStatusClass(task.status)]">
                                                        {{ getTaskStatusText(task.status) }}
                                                    </span>
                                                    <span v-if="task.fileSize" class="text-xs text-gray-500">{{ formatFileSize(task.fileSize) }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- 进度条（进行中） -->
                                    <div v-if="task.status === 'processing'" class="mb-3">
                                        <div class="flex items-center justify-between text-xs text-gray-600 mb-1">
                                            <span>{{ task.progress }}%</span>
                                            <span>{{ task.processedRecords }} / {{ task.totalRecords }}</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="bg-primary h-2 rounded-full transition-all" :style="{ width: task.progress + '%' }"></div>
                                        </div>
                                    </div>
                                    
                                    <!-- 任务信息 -->
                                    <div class="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                                        <div>{{ t('createTime') }}: {{ task.createdAt }}</div>
                                        <div v-if="task.completedAt">{{ t('completeTime') }}: {{ task.completedAt }}</div>
                                        <div v-if="task.expiredAt && task.status === 'completed'" class="col-span-2">
                                            {{ t('expiryTime') }}: {{ task.expiredAt }} 
                                            <span :class="['ml-1', isTaskExpired(task) ? 'text-red-600' : 'text-green-600']">
                                                ({{ isTaskExpired(task) ? t('expired') : t('expiresIn') + ' ' + getExpiryDays(task) + t('days') }})
                                            </span>
                                        </div>
                                        <div v-if="task.errorMessage" class="col-span-2 text-red-600">{{ task.errorMessage }}</div>
                                    </div>
                                    
                                    <!-- 操作按钮 -->
                                    <div class="flex gap-2">
                                        <button v-if="task.status === 'completed' && !isTaskExpired(task)" @click="downloadTask(task)" class="flex-1 px-3 py-1.5 bg-primary text-white text-xs hover:bg-primary-dark rounded-md transition-colors">
                                            {{ t('download') }}
                                        </button>
                                        <button v-if="task.status === 'failed'" @click="retryTask(task)" class="flex-1 px-3 py-1.5 bg-orange-500 text-white text-xs hover:bg-orange-600 rounded-md transition-colors">
                                            {{ t('retry') }}
                                        </button>
                                        <button v-if="task.status === 'processing'" @click="cancelTask(task)" class="flex-1 px-3 py-1.5 bg-gray-500 text-white text-xs hover:bg-gray-600 rounded-md transition-colors">
                                            {{ t('cancel') }}
                                        </button>
                                        <button @click="deleteTask(task)" class="px-3 py-1.5 bg-white border border-gray-300 text-gray-600 text-xs hover:bg-gray-50 rounded-md transition-colors">
                                            {{ t('delete') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </teleport>
        </div>
    `,
    data() {
        return {
            currentLang: 'zh',
            showLangMenu: false,
            activeMainNav: 'dispatch',
            showUserMenu: false,
            expandedMenus: ['workOrder'],
            currentPage: 'podPenalty',
            showPendingAlert: false,
            pendingCount: 0,
            showDownloadCenter: false,
            activeTaskTab: 'all',
            unreadTaskCount: 0,
            exportTasks: [],
            taskPolling: null,
            languages: [
                { code: 'zh', label: '简体中文' },
                { code: 'en', label: 'English' },
                { code: 'es', label: 'Español' }
            ],
            mainNav: [
                { key: 'home' },
                { key: 'dispatch' },
                { key: 'finance' },
                { key: 'merchant' }
            ],
            sideMenus: [
                {
                    key: 'quote',
                    children: [
                        { key: 'uploadQuote' },
                        { key: 'queryQuote' }
                    ]
                },
                { key: 'forecast' },
                {
                    key: 'boxManagement',
                    children: [
                        { key: 'boxArchive' },
                        { key: 'boxDeliveryStats' }
                    ]
                },
                {
                    key: 'driverManagement',
                    children: [
                        { key: 'driverArchive' }
                    ]
                },
                {
                    key: 'waybillStats',
                    children: [
                        { key: 'returnWarehouseQuery' }
                    ]
                },
                {
                    key: 'workOrder',
                    children: [
                        { key: 'podPenalty' }
                    ]
                }
            ]
        }
    },
    computed: {
        currentPageComponent() {
            const pages = {
                'podPenalty': PodPenaltyPage
            };
            return pages[this.currentPage] || PodPenaltyPage;
        },
        currentLangLabel() {
            const lang = this.languages.find(l => l.code === this.currentLang);
            return lang ? lang.label : 'English';
        },
        filteredTasks() {
            if (this.activeTaskTab === 'all') return this.exportTasks;
            if (this.activeTaskTab === 'processing') return this.exportTasks.filter(t => t.status === 'processing' || t.status === 'pending');
            if (this.activeTaskTab === 'completed') return this.exportTasks.filter(t => t.status === 'completed');
            if (this.activeTaskTab === 'failed') return this.exportTasks.filter(t => t.status === 'failed');
            return this.exportTasks;
        },
        processingTaskCount() {
            return this.exportTasks.filter(t => t.status === 'processing' || t.status === 'pending').length;
        },
        completedTaskCount() {
            return this.exportTasks.filter(t => t.status === 'completed').length;
        },
        failedTaskCount() {
            return this.exportTasks.filter(t => t.status === 'failed').length;
        }
    },
    methods: {
        t(key) {
            return i18n[this.currentLang][key] || key;
        },
        changeLang(code) {
            this.currentLang = code;
            this.showLangMenu = false;
        },
        toggleMenu(key) {
            const index = this.expandedMenus.indexOf(key);
            if (index > -1) {
                this.expandedMenus.splice(index, 1);
            } else {
                this.expandedMenus.push(key);
            }
        },
        logout() {
            this.$emit('navigate', 'login');
        },
        checkPendingAppeals() {
            // 模拟从后端获取待申诉数量
            // 实际应用中应该调用API获取真实数据
            // 这里使用模拟数据：24条记录中，每5条有1条是pending状态
            this.pendingCount = Math.floor(24 / 5); // 约4-5条待申诉
            
            if (this.pendingCount > 0) {
                this.showPendingAlert = true;
            }
        },
        closePendingAlert() {
            this.showPendingAlert = false;
        },
        goToPendingAppeals() {
            this.showPendingAlert = false;
            // 确保工单管理菜单展开
            if (!this.expandedMenus.includes('workOrder')) {
                this.expandedMenus.push('workOrder');
            }
            // 跳转到POD申诉页面
            this.currentPage = 'podPenalty';
            // 等待页面加载后，设置为待申诉tab
            this.$nextTick(() => {
                const podPage = this.$refs.podPenaltyPage;
                if (podPage) {
                    podPage.activeTab = '';
                }
            });
        },
        // 下载中心方法
        loadExportTasks() {
            // 模拟加载导出任务
            // 实际应用中应该调用API: GET /api/export/tasks
            this.exportTasks = [
                {
                    id: 1,
                    taskId: 'EXPORT_20260302_001',
                    fileName: 'POD不合格记录_2026-02-28.xlsx',
                    status: 'completed',
                    fileSize: 2621440,
                    progress: 100,
                    totalRecords: 10000,
                    processedRecords: 10000,
                    createdAt: '2026-02-28 10:30:00',
                    completedAt: '2026-02-28 10:32:15',
                    expiredAt: '2026-03-07 10:32:15',
                    downloadCount: 0
                },
                {
                    id: 2,
                    taskId: 'EXPORT_20260302_002',
                    fileName: 'POD不合格记录_2026-02-27.xlsx',
                    status: 'processing',
                    progress: 45,
                    totalRecords: 8000,
                    processedRecords: 3600,
                    createdAt: '2026-02-28 11:00:00',
                    completedAt: null,
                    expiredAt: null
                },
                {
                    id: 3,
                    taskId: 'EXPORT_20260302_003',
                    fileName: 'POD不合格记录_2026-02-26.xlsx',
                    status: 'failed',
                    createdAt: '2026-02-28 09:00:00',
                    errorMessage: '数据查询超时'
                }
            ];
            
            // 计算未读数量（已完成但未下载的）
            this.unreadTaskCount = this.exportTasks.filter(t => t.status === 'completed' && t.downloadCount === 0).length;
        },
        startTaskPolling() {
            // 开始轮询任务状态
            if (this.taskPolling) return;
            
            this.taskPolling = setInterval(() => {
                // 模拟更新进行中任务的进度
                this.exportTasks.forEach(task => {
                    if (task.status === 'processing' && task.progress < 100) {
                        task.progress = Math.min(100, task.progress + Math.floor(Math.random() * 10));
                        task.processedRecords = Math.floor(task.totalRecords * task.progress / 100);
                        
                        // 模拟任务完成
                        if (task.progress >= 100) {
                            task.status = 'completed';
                            task.completedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
                            const expiredDate = new Date();
                            expiredDate.setDate(expiredDate.getDate() + 7);
                            task.expiredAt = expiredDate.toISOString().slice(0, 19).replace('T', ' ');
                            task.fileSize = 2621440;
                            this.unreadTaskCount++;
                        }
                    }
                });
            }, 5000);
        },
        stopTaskPolling() {
            if (this.taskPolling) {
                clearInterval(this.taskPolling);
                this.taskPolling = null;
            }
        },
        getTaskStatusClass(status) {
            const classes = {
                pending: 'bg-gray-100 text-gray-700',
                processing: 'bg-orange-100 text-orange-700',
                completed: 'bg-green-100 text-green-700',
                failed: 'bg-red-100 text-red-700'
            };
            return classes[status] || 'bg-gray-100 text-gray-700';
        },
        getTaskStatusText(status) {
            const map = {
                pending: 'pending',
                processing: 'processing',
                completed: 'completed',
                failed: 'failed'
            };
            return this.t(map[status] || status);
        },
        formatFileSize(bytes) {
            if (!bytes) return '0 B';
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        },
        isTaskExpired(task) {
            if (!task.expiredAt) return false;
            return new Date(task.expiredAt) < new Date();
        },
        getExpiryDays(task) {
            if (!task.expiredAt) return 0;
            const diff = new Date(task.expiredAt) - new Date();
            return Math.ceil(diff / (1000 * 60 * 60 * 24));
        },
        downloadTask(task) {
            // 实际应用中应该调用API: GET /api/export/download/{taskId}
            alert(this.t('downloading') + ' ' + task.fileName);
            task.downloadCount++;
            if (task.downloadCount === 1) {
                this.unreadTaskCount = Math.max(0, this.unreadTaskCount - 1);
            }
        },
        deleteTask(task) {
            if (!confirm(this.t('confirmDelete'))) return;
            
            // 实际应用中应该调用API: DELETE /api/export/tasks/{taskId}
            const index = this.exportTasks.findIndex(t => t.id === task.id);
            if (index > -1) {
                if (task.status === 'completed' && task.downloadCount === 0) {
                    this.unreadTaskCount = Math.max(0, this.unreadTaskCount - 1);
                }
                this.exportTasks.splice(index, 1);
                alert(this.t('taskDeleted'));
            }
        },
        retryTask(task) {
            // 实际应用中应该调用API: POST /api/export/retry/{taskId}
            task.status = 'pending';
            task.progress = 0;
            task.errorMessage = null;
            setTimeout(() => {
                task.status = 'processing';
            }, 1000);
        },
        cancelTask(task) {
            if (!confirm(this.t('confirmDelete'))) return;
            
            // 实际应用中应该调用API: POST /api/export/cancel/{taskId}
            task.status = 'failed';
            task.errorMessage = '用户取消';
            alert(this.t('taskCancelled'));
        }
    },
    mounted() {
        // 加载导出任务
        this.loadExportTasks();
        // 开始轮询任务状态
        this.startTaskPolling();
    },
    beforeUnmount() {
        // 停止轮询
        this.stopTaskPolling();
    }
};

// POD处罚管理页面 - 扁平化设计
const PodPenaltyPage = {
    props: ['lang'],
    template: `
        <div class="flex flex-col gap-4">
            
            <!-- 筛选区 -->
            <div class="bg-white border border-gray-100 px-6 py-5 rounded-xl shadow-sm">
                <div class="grid grid-cols-4 gap-5 mb-4">
                    <div class="row-span-2">
                        <label class="block text-sm font-medium text-gray-500 mb-1.5">{{ t('trackingNo') }}</label>
                        <textarea v-model="filters.trackingNo" :placeholder="t('multiTrackingTip')" rows="3" class="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-primary rounded-md bg-gray-50 focus:bg-white transition-colors resize-none"></textarea>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1.5">{{ t('inspectDateFrom') }}</label>
                        <input v-model="filters.dateFrom" type="date" class="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-primary rounded-md bg-gray-50 focus:bg-white transition-colors">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1.5">{{ t('inspectDateTo') }}</label>
                        <input v-model="filters.dateTo" type="date" class="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-primary rounded-md bg-gray-50 focus:bg-white transition-colors">
                    </div>
                </div>
                <!-- 更多查询条件 -->
                <div v-if="showMoreFilters" class="grid grid-cols-4 gap-5 mb-4 pt-4 border-t border-gray-100">
                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1.5">{{ t('errorReasonLabel') }}</label>
                        <select v-model="filters.errorReason" class="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-primary rounded-md bg-gray-50 focus:bg-white transition-colors">
                            <option value="">{{ t('pleaseSelect') }}</option>
                            <option v-for="er in errorReasonOptions" :key="er" :value="er">{{ er }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1.5">{{ t('warehouseLabel') }}</label>
                        <select v-model="filters.warehouse" class="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-primary rounded-md bg-gray-50 focus:bg-white transition-colors">
                            <option value="">{{ t('pleaseSelect') }}</option>
                            <option value="LAX-WH-01">LAX-WH-01</option>
                            <option value="LAX-WH-02">LAX-WH-02</option>
                            <option value="LAX-WH-03">LAX-WH-03</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1.5">{{ t('boxCreateDateLabel') }}</label>
                        <input v-model="filters.boxCreateDate" type="date" class="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-primary rounded-md bg-gray-50 focus:bg-white transition-colors">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1.5">{{ t('zoneLabel') }}</label>
                        <select v-model="filters.zone" class="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-primary rounded-md bg-gray-50 focus:bg-white transition-colors">
                            <option value="">{{ t('pleaseSelect') }}</option>
                            <option v-for="z in zoneOptions" :key="z" :value="z">{{ z }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-500 mb-1.5">{{ t('boxNoLabel') }}</label>
                        <input v-model="filters.boxNo" type="text" placeholder="" class="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-primary rounded-md bg-gray-50 focus:bg-white transition-colors">
                    </div>
                </div>
                <div class="flex gap-2.5 items-center">
                    <button @click="handleQuery" class="px-5 py-2 bg-primary text-white text-sm font-medium hover:bg-primary-dark rounded-md transition-colors">{{ t('query') }}</button>
                    <button @click="handleReset" class="px-5 py-2 bg-white text-gray-600 text-sm font-medium border border-gray-200 hover:bg-gray-50 rounded-md transition-colors">{{ t('reset') }}</button>
                    <button @click="showMoreFilters = !showMoreFilters" class="px-4 py-2 text-primary text-sm font-medium hover:bg-blue-50 rounded-md transition-colors">
                        {{ showMoreFilters ? t('lessFilters') : t('moreFilters') }}
                        <span class="ml-1 text-xs">{{ showMoreFilters ? '▲' : '▼' }}</span>
                    </button>
                    <div class="flex-1"></div>
                    <button @click="openBatchAppealDialog" class="px-4 py-2 bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 rounded-md transition-colors">批量申诉</button>
                    <button @click="createExportTask" class="px-4 py-2 bg-green-600 text-white text-sm font-medium hover:bg-green-700 rounded-md transition-colors">{{ t('exportExcel') }}</button>
                </div>
            </div>
            
            <!-- 状态Tab页 + 统计 -->
            <div class="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div class="flex border-b border-gray-100">
                    <button @click="activeTab = ''" :class="['px-5 py-3 text-sm font-medium border-b-2 transition-colors', activeTab === '' ? 'border-primary text-primary bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50']">
                        {{ t('all') }} <span class="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600">{{ records.length }}</span>
                    </button>
                    <button @click="activeTab = 'reviewing'" :class="['px-5 py-3 text-sm font-medium border-b-2 transition-colors', activeTab === 'reviewing' ? 'border-primary text-primary bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50']">
                        {{ t('reviewing') }} <span class="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">{{ statusCounts.reviewing }}</span>
                    </button>
                    <button @click="activeTab = 'approved'" :class="['px-5 py-3 text-sm font-medium border-b-2 transition-colors', activeTab === 'approved' ? 'border-primary text-primary bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50']">
                        {{ t('approved') }} <span class="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-green-100 text-green-600">{{ statusCounts.approved }}</span>
                    </button>
                    <button @click="activeTab = 'rejected'" :class="['px-5 py-3 text-sm font-medium border-b-2 transition-colors', activeTab === 'rejected' ? 'border-primary text-primary bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50']">
                        {{ t('rejected') }} <span class="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">{{ statusCounts.rejected }}</span>
                    </button>
                    <div class="flex-1"></div>
                </div>
            </div>
            
            <!-- 数据表格 -->
            <div class="bg-white border border-gray-100 rounded-xl shadow-sm">
                <!-- 列设置按钮 -->
                <div class="flex items-center justify-end px-4 py-2 border-b border-gray-100 bg-gray-50/50">
                    <div class="relative">
                        <button @click="showColumnPicker = !showColumnPicker" class="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-500 hover:text-primary hover:bg-white border border-gray-200 rounded-md transition-colors">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            {{ t('customColumns') }}
                        </button>
                        <div v-if="showColumnPicker" class="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 w-48 max-h-80 overflow-y-auto">
                            <label v-for="col in allColumns" :key="col.key" class="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 cursor-pointer text-xs text-gray-600">
                                <input type="checkbox" v-model="col.visible" class="w-3.5 h-3.5 rounded border-gray-300 text-primary focus:ring-primary" :disabled="col.fixed">
                                {{ t(col.labelKey) }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50/80 border-b border-gray-100 sticky top-0">
                            <tr>
                                <th v-if="activeTab === '' || activeTab === 'rejected'" class="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap sticky left-0 bg-gray-50 z-10">操作</th>
                                <th v-if="activeTab !== '' && activeTab !== 'rejected'" class="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap sticky left-0 bg-gray-50 z-10">操作</th>
                                <th :class="['px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap sticky bg-gray-50 z-10', 'left-[68px]']">{{ t('colTrackingNo') }}</th>
                                <th v-if="isColVisible('photos')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colPhotos') }}</th>
                                <th v-if="isColVisible('errorReason')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colErrorReason') }}</th>
                                <th v-if="isColVisible('inspectDate')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colInspectDate') }}</th>
                                <th v-if="isColVisible('appealDeadline') && (activeTab === '' || activeTab === 'pending' || activeTab === 'autoApproved')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('appealDeadline') }}</th>
                                <th v-if="isColVisible('remainingDays') && (activeTab === '' || activeTab === 'pending')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('remainingDays') }}</th>
                                <th v-if="isColVisible('reviewTime') && (activeTab === '' || activeTab === 'approved' || activeTab === 'rejected')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('reviewTime') }}</th>
                                <th v-if="isColVisible('appealType') && (activeTab === 'reviewing' || activeTab === 'approved' || activeTab === 'rejected')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colAppealType') }}</th>
                                <th v-if="isColVisible('appealReason') && (activeTab === 'reviewing' || activeTab === 'approved' || activeTab === 'rejected')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colAppealReason') }}</th>
                                <th v-if="isColVisible('appealAttachment') && (activeTab === 'reviewing' || activeTab === 'approved' || activeTab === 'rejected')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colAppealAttachment') }}</th>
                                <th v-if="isColVisible('appealStatus')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colAppealStatus') }}</th>
                                <th v-if="isColVisible('driver')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colDriver') }}</th>
                                <th v-if="isColVisible('warehouse')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colWarehouse') }}</th>
                                <th v-if="isColVisible('boxCreateDate')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colBoxCreateDate') }}</th>
                                <th v-if="isColVisible('signDate')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colSignDate') }}</th>
                                <th v-if="isColVisible('zone')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colZone') }}</th>
                                <th v-if="isColVisible('boxNo')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colBoxNo') }}</th>
                                <th v-if="isColVisible('workOrderNo')" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{{ t('colWorkOrderNo') }}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-50">
                            <tr v-for="item in paginatedRecords" :key="item.id" class="hover:bg-blue-50/30 transition-colors">
                                <td v-if="activeTab === '' || activeTab === 'rejected'" class="px-4 py-3.5 whitespace-nowrap sticky left-0 bg-white z-10 text-center">
                                    <button v-if="item.status === 'pending'" @click="openAppealDialog(item)" 
                                            class="px-3.5 py-1.5 bg-primary text-white text-xs font-medium hover:bg-primary-dark rounded-md transition-colors">
                                        申诉
                                    </button>
                                    <button v-else-if="item.status === 'reviewing' || item.status === 'approved' || item.status === 'rejected' || item.status === 'autoApproved'" @click="viewDetail(item)" 
                                            class="px-3.5 py-1.5 text-gray-500 hover:text-primary text-xs hover:bg-gray-50 rounded-md transition-colors">
                                        {{ t('viewDetail') }}
                                    </button>
                                    <span v-else class="text-gray-300 text-xs">-</span>
                                </td>
                                <td v-if="activeTab !== '' && activeTab !== 'rejected'" class="px-4 py-3.5 whitespace-nowrap sticky left-0 bg-white z-10 text-center">
                                    <button @click="viewDetail(item)" class="px-3.5 py-1.5 text-gray-500 hover:text-primary text-xs hover:bg-gray-50 rounded-md transition-colors">
                                        {{ t('viewDetail') }}
                                    </button>
                                </td>
                                <td class="px-4 py-3.5 text-primary font-medium text-sm whitespace-nowrap sticky bg-white z-10 left-[68px]">{{ item.trackingNo }}</td>
                                <td v-if="isColVisible('photos')" class="px-4 py-3.5">
                                    <div class="flex gap-1.5">
                                        <div v-for="(photo, index) in item.photos.slice(0, 3)" :key="index" 
                                             @click="viewPhotos(item.photos, index)"
                                             class="relative w-12 h-12 border border-gray-100 cursor-pointer hover:opacity-80 hover:scale-105 transition-all rounded-lg overflow-hidden group">
                                            <img :src="photo" class="w-full h-full object-cover">
                                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                                <span class="text-white opacity-0 group-hover:opacity-100 text-sm">🔍</span>
                                            </div>
                                            <div class="absolute bottom-0 right-0 w-4 h-4 bg-primary/80 text-white text-[9px] flex items-center justify-center rounded-tl-md font-medium">
                                                {{ index + 1 }}
                                            </div>
                                        </div>
                                        <div v-if="item.photos.length > 3" 
                                             @click="viewPhotos(item.photos, 3)"
                                             class="w-12 h-12 border border-dashed border-gray-200 flex items-center justify-center text-xs text-gray-400 rounded-lg cursor-pointer hover:border-primary hover:text-primary transition-all">
                                            +{{ item.photos.length - 3 }}
                                        </div>
                                    </div>
                                </td>
                                <td v-if="isColVisible('errorReason')" class="px-4 py-3.5 text-red-500 text-sm font-medium max-w-[320px]" :title="item.errorReason">
                                    <span class="whitespace-normal break-words">{{ item.errorReason }}</span>
                                </td>
                                <td v-if="isColVisible('inspectDate')" class="px-4 py-3.5 text-sm text-gray-500 whitespace-nowrap">{{ item.inspectDate }}</td>
                                <td v-if="isColVisible('appealDeadline') && (activeTab === '' || activeTab === 'pending' || activeTab === 'autoApproved')" class="px-4 py-3.5 text-sm whitespace-nowrap" :class="(item.status === 'pending' || item.status === 'autoApproved') ? 'text-gray-700' : 'text-gray-400'">{{ item.appealDeadline }}</td>
                                <td v-if="isColVisible('remainingDays') && (activeTab === '' || activeTab === 'pending')" class="px-4 py-3.5 text-sm font-medium whitespace-nowrap">
                                    <span v-if="item.status === 'pending'" 
                                          :class="item.remainingHours > 72 ? 'text-green-600' : 
                                                 (item.remainingHours >= 48 ? 'text-yellow-600' : 
                                                 (item.remainingHours > 24 ? 'text-orange-600' : 'text-red-600'))">
                                        {{ formatRemainingTime(item.remainingHours) }}
                                    </span>
                                    <span v-else class="text-gray-400">-</span>
                                </td>
                                <td v-if="isColVisible('reviewTime') && (activeTab === '' || activeTab === 'approved' || activeTab === 'rejected')" class="px-4 py-3.5 text-sm whitespace-nowrap" :class="(item.status === 'approved' || item.status === 'rejected') ? 'text-gray-700' : 'text-gray-400'">{{ item.reviewTime || '-' }}</td>
                                <td v-if="isColVisible('appealType') && (activeTab === 'reviewing' || activeTab === 'approved' || activeTab === 'rejected')" class="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{{ item.appealType || '-' }}</td>
                                <td v-if="isColVisible('appealReason') && (activeTab === 'reviewing' || activeTab === 'approved' || activeTab === 'rejected')" class="px-4 py-3.5 text-sm text-gray-500 whitespace-normal" :title="item.appealReason">{{ item.appealReason || '-' }}</td>
                                <td v-if="isColVisible('appealAttachment') && (activeTab === 'reviewing' || activeTab === 'approved' || activeTab === 'rejected')" class="px-4 py-3.5 text-sm text-gray-500 whitespace-nowrap">
                                    <button v-if="item.attachmentCount" @click="viewAttachments(item)" class="text-primary hover:text-primary-dark flex items-center gap-1">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                                        </svg>
                                        <span>{{ item.attachmentCount }} 个附件</span>
                                    </button>
                                    <span v-else class="text-gray-300">-</span>
                                </td>
                                <td v-if="isColVisible('appealStatus')" class="px-4 py-3.5 whitespace-nowrap">
                                    <span v-if="item.status !== 'pending'" :class="['px-2.5 py-1 text-xs font-medium rounded-full', getStatusClass(item.status)]">
                                        {{ getStatusLabel(item.status) }}
                                    </span>
                                    <span v-else class="text-gray-300 text-xs">-</span>
                                </td>
                                <td v-if="isColVisible('driver')" class="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{{ item.driver }}</td>
                                <td v-if="isColVisible('warehouse')" class="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{{ item.warehouse }}</td>
                                <td v-if="isColVisible('boxCreateDate')" class="px-4 py-3.5 text-sm text-gray-500 whitespace-nowrap">{{ item.boxCreateDate }}</td>
                                <td v-if="isColVisible('signDate')" class="px-4 py-3.5 text-sm text-gray-500 whitespace-nowrap">{{ item.signDate }}</td>
                                <td v-if="isColVisible('zone')" class="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{{ item.zone }}</td>
                                <td v-if="isColVisible('boxNo')" class="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{{ item.boxNo }}</td>
                                <td v-if="isColVisible('workOrderNo')" class="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{{ item.workOrderNo }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <!-- 分页 -->
                <div class="border-t border-gray-100 px-5 py-3 flex justify-between items-center bg-white">
                    <div class="flex items-center gap-3">
                        <span class="text-xs text-gray-400">{{ t('showing') }} {{ paginatedRecords.length }} {{ t('of') }} {{ filteredRecords.length }} {{ t('records') }}</span>
                        <select v-model="pageSize" @change="currentPage = 1" class="px-2 py-1 border border-gray-200 text-xs text-gray-500 rounded-md bg-white focus:outline-none focus:border-primary">
                            <option v-for="size in pageSizeOptions" :key="size" :value="size">{{ size }} {{ t('perPage') }}</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <button @click="currentPage = Math.max(1, currentPage - 1)" class="px-3 py-1.5 border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed" :disabled="currentPage === 1">{{ t('prevPage') }}</button>
                        <span class="px-2 text-xs text-gray-400">{{ currentPage }} / {{ totalPages }}</span>
                        <button @click="currentPage = Math.min(totalPages, currentPage + 1)" class="px-3 py-1.5 border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed" :disabled="currentPage >= totalPages">{{ t('nextPage') }}</button>
                    </div>
                </div>
            </div>

            <!-- 照片预览弹窗 - 白色背景，居中展示 -->
            <div v-if="showPhotoViewer" @click.self="showPhotoViewer = false" class="fixed inset-0 bg-black/60 flex items-center justify-center z-[10000] p-8">
                <!-- 白色弹窗容器 - 宽度占屏幕2/3 -->
                <div class="bg-white rounded-2xl shadow-2xl w-auto max-w-[90vw] max-h-[90vh] flex flex-col relative">
                    <!-- 顶部标题栏 -->
                    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-800">POD照片预览</h3>
                        <button @click="showPhotoViewer = false" 
                                class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- 图片展示区域 -->
                    <div class="flex-1 flex items-center justify-center p-8 relative overflow-hidden" @wheel="onWheelZoom">
                        <!-- 左箭头 - 在弹窗内部左侧 -->
                        <button @click="prevPhoto" 
                                class="absolute left-4 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary bg-white hover:bg-gray-50 rounded-full shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
                                :disabled="viewingPhotos.length <= 1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        
                        <!-- 图片 -->
                        <div class="max-w-full max-h-full flex items-center justify-center overflow-auto">
                            <img :src="currentPhoto" 
                                 :style="{ transform: 'scale(' + zoomLevel + ')' }"
                                 class="max-w-full h-[66vh] object-contain rounded-lg transition-transform cursor-zoom-in"
                                 @click="zoomIn">
                        </div>
                        
                        <!-- 缩略图导航 -->
                        <div v-if="viewingPhotos.length > 1" class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 flex items-center gap-2 z-10">
                            <button v-for="(photo, idx) in viewingPhotos" :key="idx"
                                    @click="currentPhotoIndex = idx"
                                    :class="['w-2 h-2 rounded-full transition-all', idx === currentPhotoIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400']">
                            </button>
                        </div>
                        
                        <!-- 右箭头 - 在弹窗内部右侧 -->
                        <button @click="nextPhoto" 
                                class="absolute right-4 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary bg-white hover:bg-gray-50 rounded-full shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
                                :disabled="viewingPhotos.length <= 1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                        
                        <!-- 缩放控制按钮 -->
                        <div class="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 flex items-center gap-2 z-10">
                            <button @click="zoomOut" 
                                    class="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md transition-all"
                                    title="缩小">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                                </svg>
                            </button>
                            <span class="text-xs text-gray-500 font-medium min-w-[40px] text-center">{{ Math.round(zoomLevel * 100) }}%</span>
                            <button @click="zoomIn" 
                                    class="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md transition-all"
                                    title="放大">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                                </svg>
                            </button>
                            <button @click="resetZoom" 
                                    class="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 rounded-md transition-all"
                                    title="重置">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <!-- 底部信息栏 -->
                    <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-center">
                        <div class="text-sm text-gray-500">
                            使用左右箭头或键盘方向键切换 | 滚轮或点击放大 | 右下角按钮缩放
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 附件预览弹窗 -->
            <div v-if="showAttachmentPreview" @click.self="showAttachmentPreview = false" class="fixed inset-0 bg-black/60 flex items-center justify-center z-[10000] p-8">
                <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col relative">
                    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-800">附件预览</h3>
                        <button @click="showAttachmentPreview = false" 
                                class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center p-8 overflow-hidden">
                        <img v-if="previewingAttachment" :src="previewingAttachment.preview" class="max-w-full max-h-full object-contain rounded-lg">
                    </div>
                    <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                        <div class="text-sm text-gray-700">{{ previewingAttachment?.name }}</div>
                        <div class="text-sm text-gray-500">{{ formatFileSize(previewingAttachment?.size) }}</div>
                    </div>
                </div>
            </div>
            
            <!-- 附件列表预览弹窗（查看已提交的附件） -->
            <div v-if="showAttachmentsListDialog" @click.self="showAttachmentsListDialog = false" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
                <div class="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
                    <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                        <h3 class="text-lg font-semibold text-gray-700">申诉附件</h3>
                        <button @click="showAttachmentsListDialog = false" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                    </div>
                    <div class="p-6">
                        <div class="mb-4 text-sm text-gray-600">
                            <div><span class="font-medium">运单号：</span>{{ viewingAttachmentsRecord?.trackingNo }}</div>
                            <div class="mt-1"><span class="font-medium">申诉类型：</span>{{ viewingAttachmentsRecord?.appealType }}</div>
                        </div>
                        <div class="grid grid-cols-3 gap-3">
                            <div v-for="(attachment, index) in viewingAttachments" :key="index" 
                                 @click="previewAttachment(attachment)"
                                 class="aspect-square border border-gray-200 rounded-lg cursor-pointer hover:opacity-80 hover:border-primary transition-all overflow-hidden group relative">
                                <img v-if="attachment.type === 'image'" :src="attachment.url" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                                <div v-else class="w-full h-full bg-red-100 flex flex-col items-center justify-center">
                                    <svg class="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z"/>
                                    </svg>
                                    <div class="text-xs text-red-600 font-bold mt-2">PDF</div>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 truncate">
                                    {{ attachment.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 申诉弹窗 -->
            <div v-if="showAppealDialog" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
                <div class="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
                    <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                        <h3 class="text-lg font-semibold text-gray-700">POD申诉</h3>
                        <button @click="showAppealDialog = false" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                    </div>
                    
                    <div class="p-6">
                        <!-- 运单信息 -->
                        <div class="bg-blue-50/40 border border-blue-100 p-5 mb-5 rounded-lg">
                            <div class="grid grid-cols-4 gap-x-6 gap-y-3 text-sm">
                                <div><span class="text-gray-500">运单号：</span><span class="text-gray-700 font-medium">{{ selectedRecord.trackingNo }}</span></div>
                                <div><span class="text-gray-500">工单编号：</span><span class="text-gray-700">{{ selectedRecord.workOrderNo }}</span></div>
                                <div><span class="text-gray-500">查验日期：</span><span class="text-gray-700">{{ selectedRecord.inspectDate }}</span></div>
                                <div><span class="text-gray-500">司机编号：</span><span class="text-gray-700">{{ selectedRecord.driver }}</span></div>
                                <div><span class="text-gray-500">提货仓库：</span><span class="text-gray-700">{{ selectedRecord.warehouse }}</span></div>
                                <div><span class="text-gray-500">所属网格：</span><span class="text-gray-700">{{ selectedRecord.zone }}</span></div>
                                <div><span class="text-gray-500">分箱号：</span><span class="text-gray-700">{{ selectedRecord.boxNo }}</span></div>
                                <div><span class="text-gray-500">签收日期：</span><span class="text-gray-700">{{ selectedRecord.signDate }}</span></div>
                                <div v-if="selectedRecord.status !== 'pending'"><span class="text-gray-500">申诉状态：</span><span :class="['px-2 py-0.5 text-xs font-medium rounded-full inline-block', getStatusClass(selectedRecord.status)]">{{ getStatusLabel(selectedRecord.status) }}</span></div>
                                <div v-if="selectedRecord.appealDeadline"><span class="text-gray-500">截止申诉日期：</span><span class="text-gray-700">{{ selectedRecord.appealDeadline }}</span></div>
                                <div v-if="selectedRecord.reviewTime"><span class="text-gray-500">审核时间：</span><span class="text-gray-700">{{ selectedRecord.reviewTime }}</span></div>
                                <div class="col-span-4"><span class="text-gray-500">收货地址：</span><span class="text-gray-700">{{ selectedRecord.address }}</span></div>
                                <div class="col-span-4 pt-2 border-t border-blue-100"><span class="text-red-500">POD错误原因：</span><span class="text-red-500">{{ selectedRecord.errorReason }}</span></div>
                            </div>
                        </div>
                        
                        <!-- POD照片 -->
                        <div class="mb-5">
                            <h4 class="text-sm text-gray-600 mb-3">POD照片</h4>
                            <div class="grid grid-cols-6 gap-2">
                                <div v-for="(photo, index) in selectedRecord.photos" :key="index" 
                                     @click="viewPhotos(selectedRecord.photos, index)"
                                     class="aspect-square border border-gray-200 rounded-lg cursor-pointer hover:opacity-80 hover:border-primary transition-all overflow-hidden group">
                                    <img :src="photo" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                                </div>
                            </div>
                        </div>
                        
                        <!-- 申诉表单 -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm text-gray-600 mb-1.5">申诉类型 <span class="text-red-500">*</span></label>
                                <select v-model="appealForm.type" class="w-full px-3 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-lg bg-white transition-all">
                                    <option value="">请选择申诉类型</option>
                                    <option v-for="type in appealTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm text-gray-600 mb-1.5">附件上传 <span class="text-gray-400 text-xs">(可选)</span></label>
                                <div class="relative">
                                    <input type="file" @change="handleFileUpload" multiple accept="image/*,.pdf" class="hidden" ref="fileInput">
                                    <button @click="$refs.fileInput.click()" type="button" class="w-full px-4 py-2 bg-white border-2 border-dashed border-gray-300 hover:border-primary text-sm text-gray-600 hover:text-primary rounded-lg transition-all flex items-center justify-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                                        </svg>
                                        <span>点击上传文件</span>
                                    </button>
                                </div>
                                <p class="text-xs text-gray-400 mt-1">支持图片和PDF格式，可多选</p>
                                
                                <!-- 附件预览列表 -->
                                <div v-if="appealForm.files.length > 0" class="mt-3 space-y-2">
                                    <div v-for="(file, index) in appealForm.files" :key="index" class="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-lg group hover:bg-gray-100 transition-colors">
                                        <!-- 图片预览 -->
                                        <div v-if="file.type.startsWith('image/')" @click="previewAttachment(file)" class="w-12 h-12 flex-shrink-0 border border-gray-200 rounded overflow-hidden cursor-pointer hover:opacity-80">
                                            <img :src="file.preview" class="w-full h-full object-cover">
                                        </div>
                                        <!-- PDF图标 -->
                                        <div v-else class="w-12 h-12 flex-shrink-0 bg-red-100 border border-red-200 rounded flex items-center justify-center">
                                            <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z"/>
                                                <text x="5" y="14" font-size="6" fill="currentColor" font-weight="bold">PDF</text>
                                            </svg>
                                        </div>
                                        <!-- 文件信息 -->
                                        <div class="flex-1 min-w-0">
                                            <div class="text-sm text-gray-700 truncate">{{ file.name }}</div>
                                            <div class="text-xs text-gray-400">{{ formatFileSize(file.size) }}</div>
                                        </div>
                                        <!-- 删除按钮 -->
                                        <button @click="removeFile(index)" class="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-span-2">
                                <label class="block text-sm text-gray-600 mb-1.5">申诉原因 <span class="text-red-500">*</span></label>
                                <textarea v-model="appealForm.reason" rows="3" 
                                          class="w-full px-3 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-lg resize-none transition-all"
                                          placeholder="请详细说明申诉原因，建议包含具体情况描述和相关证据说明"></textarea>
                            </div>
                        </div>
                        
                        <!-- 按钮 -->
                        <div class="flex gap-3 mt-6 pt-5 border-t border-gray-200">
                            <button @click="showAppealDialog = false" class="flex-1 px-6 py-2.5 bg-white border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 rounded-lg transition-colors">取消</button>
                            <button @click="submitAppeal" :disabled="!canSubmit" 
                                    class="flex-1 px-6 py-2.5 bg-primary text-white text-sm hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors shadow-sm">
                                提交申诉
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 详情查看弹窗 -->
            <div v-if="showDetailDialog" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
                <div class="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
                    <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                        <h3 class="text-lg font-semibold text-gray-700">POD不合格详情</h3>
                        <button @click="showDetailDialog = false" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                    </div>
                    
                    <div class="p-6">
                        <!-- 运单信息 -->
                        <div class="bg-blue-50/40 border border-blue-100 p-5 mb-5 rounded-lg">
                            <div class="grid grid-cols-4 gap-x-6 gap-y-3 text-sm">
                                <div><span class="text-gray-500">运单号：</span><span class="text-gray-700 font-medium">{{ selectedRecord.trackingNo }}</span></div>
                                <div><span class="text-gray-500">工单编号：</span><span class="text-gray-700">{{ selectedRecord.workOrderNo }}</span></div>
                                <div><span class="text-gray-500">查验日期：</span><span class="text-gray-700">{{ selectedRecord.inspectDate }}</span></div>
                                <div><span class="text-gray-500">司机编号：</span><span class="text-gray-700">{{ selectedRecord.driver }}</span></div>
                                <div><span class="text-gray-500">提货仓库：</span><span class="text-gray-700">{{ selectedRecord.warehouse }}</span></div>
                                <div><span class="text-gray-500">所属网格：</span><span class="text-gray-700">{{ selectedRecord.zone }}</span></div>
                                <div><span class="text-gray-500">分箱号：</span><span class="text-gray-700">{{ selectedRecord.boxNo }}</span></div>
                                <div><span class="text-gray-500">签收日期：</span><span class="text-gray-700">{{ selectedRecord.signDate }}</span></div>
                                <div v-if="selectedRecord.status !== 'pending'"><span class="text-gray-500">申诉状态：</span><span :class="['px-2 py-0.5 text-xs font-medium rounded-full inline-block', getStatusClass(selectedRecord.status)]">{{ getStatusLabel(selectedRecord.status) }}</span></div>
                                <div v-if="selectedRecord.appealDeadline"><span class="text-gray-500">截止申诉日期：</span><span class="text-gray-700">{{ selectedRecord.appealDeadline }}</span></div>
                                <div v-if="selectedRecord.reviewTime"><span class="text-gray-500">审核时间：</span><span class="text-gray-700">{{ selectedRecord.reviewTime }}</span></div>
                                <div class="col-span-4"><span class="text-gray-500">收货地址：</span><span class="text-gray-700">{{ selectedRecord.address }}</span></div>
                                <div class="col-span-4 pt-2 border-t border-blue-100"><span class="text-red-500">POD错误原因：</span><span class="text-red-500">{{ selectedRecord.errorReason }}</span></div>
                            </div>
                        </div>
                        
                        <!-- POD照片 -->
                        <div class="mb-5">
                            <h4 class="text-sm font-medium text-gray-600 mb-3">POD照片</h4>
                            <div class="grid grid-cols-6 gap-2">
                                <div v-for="(photo, index) in selectedRecord.photos" :key="index" 
                                     @click="viewPhotos(selectedRecord.photos, index)"
                                     class="aspect-square border border-gray-200 rounded-lg cursor-pointer hover:opacity-80 hover:border-primary transition-all overflow-hidden group">
                                    <img :src="photo" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
                                </div>
                            </div>
                        </div>
                        
                        <!-- 申诉信息（如果已申诉） -->
                        <div v-if="selectedRecord.appealType" class="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                            <h4 class="text-sm font-medium text-gray-700 mb-3">申诉信息</h4>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div><span class="text-gray-500">申诉类型：</span><span class="text-gray-700">{{ selectedRecord.appealType }}</span></div>
                                <div v-if="selectedRecord.attachmentCount"><span class="text-gray-500">申诉附件：</span>
                                    <button @click="viewAttachments(selectedRecord)" class="text-primary hover:text-primary-dark">
                                        {{ selectedRecord.attachmentCount }} 个附件
                                    </button>
                                </div>
                                <div class="col-span-2"><span class="text-gray-500">申诉原因：</span><span class="text-gray-700">{{ selectedRecord.appealReason }}</span></div>
                            </div>
                        </div>
                        
                        <!-- 关闭按钮 -->
                        <div class="flex justify-end mt-6 pt-5 border-t border-gray-200">
                            <button @click="showDetailDialog = false" class="px-6 py-2.5 bg-white border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 rounded-lg transition-colors">关闭</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 批量导入弹窗 -->
            
            <!-- 批量申诉弹窗 -->
            <div v-if="showBatchAppealDialog" class="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
                <div class="bg-white w-full max-w-7xl max-h-[90vh] flex flex-col rounded-xl shadow-2xl">
                    <div class="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                        <div class="flex items-center gap-4">
                            <h3 class="text-lg font-semibold text-gray-700">批量申诉</h3>
                            <span class="text-sm text-gray-500">共 {{ batchAppealRecords.length }} 条待申诉运单</span>
                        </div>
                        <button @click="closeBatchAppealDialog" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                    </div>
                    
                    <div class="flex-1 overflow-y-auto p-6">
                        <div v-for="(record, index) in batchAppealRecords" :key="record.id" class="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                            <!-- 运单信息头部 -->
                            <div class="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                                <div class="flex items-center gap-6 text-sm">
                                    <span class="font-medium text-gray-700">{{ index + 1 }}. {{ record.trackingNo }}</span>
                                    <span class="text-gray-500">{{ record.address }}</span>
                                    <span class="text-gray-500">{{ record.inspectDate }}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span v-if="batchAppealForms[record.id]?.submitted" class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">已提交</span>
                                    <button @click="toggleBatchItem(record.id)" class="text-xs text-primary hover:text-primary-dark">
                                        {{ expandedBatchItems.includes(record.id) ? '收起' : '展开' }}
                                    </button>
                                </div>
                            </div>
                            
                            <!-- 展开的详细信息和申诉表单 -->
                            <div v-if="expandedBatchItems.includes(record.id)" class="p-4 bg-white">
                                <div class="grid grid-cols-2 gap-4 mb-4">
                                    <!-- 左侧：POD照片和错误原因 -->
                                    <div>
                                        <div class="mb-3">
                                            <h5 class="text-xs text-gray-500 mb-2">POD照片</h5>
                                            <div class="grid grid-cols-3 gap-2">
                                                <div v-for="(photo, pIndex) in record.photos.slice(0, 6)" :key="pIndex" 
                                                     @click="viewPhotos(record.photos, pIndex)"
                                                     class="aspect-square border border-gray-200 rounded cursor-pointer hover:opacity-80 hover:border-primary transition-all overflow-hidden">
                                                    <img :src="photo" class="w-full h-full object-cover">
                                                </div>
                                            </div>
                                            <p v-if="record.photos.length > 6" class="text-xs text-gray-400 mt-1">共 {{ record.photos.length }} 张照片，点击查看全部</p>
                                        </div>
                                        <div>
                                            <h5 class="text-xs text-gray-500 mb-1">POD错误原因</h5>
                                            <p class="text-sm text-red-500 bg-red-50 p-2 rounded">{{ record.errorReason }}</p>
                                        </div>
                                    </div>
                                    
                                    <!-- 右侧：申诉表单 -->
                                    <div class="space-y-3">
                                        <div>
                                            <label class="block text-xs text-gray-600 mb-1">申诉类型 <span class="text-red-500">*</span></label>
                                            <select v-model="batchAppealForms[record.id].type" :disabled="batchAppealForms[record.id]?.submitted" class="w-full px-3 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-lg bg-white disabled:bg-gray-100">
                                                <option value="">请选择申诉类型</option>
                                                <option v-for="type in appealTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label class="block text-xs text-gray-600 mb-1">申诉原因 <span class="text-red-500">*</span></label>
                                            <textarea v-model="batchAppealForms[record.id].reason" :disabled="batchAppealForms[record.id]?.submitted" rows="3" 
                                                      class="w-full px-3 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-lg resize-none disabled:bg-gray-100"
                                                      placeholder="请详细说明申诉原因"></textarea>
                                        </div>
                                        
                                        <div>
                                            <label class="block text-xs text-gray-600 mb-1">附件上传 <span class="text-gray-400">(可选)</span></label>
                                            <div class="relative">
                                                <input type="file" @change="handleBatchFileUpload(record.id, $event)" :disabled="batchAppealForms[record.id]?.submitted" multiple accept="image/*,.pdf" class="hidden" :ref="'batchFileInput' + record.id">
                                                <button @click="$refs['batchFileInput' + record.id][0].click()" :disabled="batchAppealForms[record.id]?.submitted" type="button" class="w-full px-3 py-2 bg-white border border-dashed border-gray-300 hover:border-primary text-xs text-gray-600 hover:text-primary rounded-lg transition-all flex items-center justify-center gap-2 disabled:bg-gray-100 disabled:cursor-not-allowed">
                                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                                                    </svg>
                                                    <span>点击上传</span>
                                                </button>
                                            </div>
                                            
                                            <!-- 附件预览列表 -->
                                            <div v-if="batchAppealForms[record.id].files?.length > 0" class="mt-2 space-y-1.5">
                                                <div v-for="(file, fIndex) in batchAppealForms[record.id].files" :key="fIndex" class="flex items-center gap-2 p-1.5 bg-gray-50 border border-gray-200 rounded text-xs">
                                                    <div v-if="file.type.startsWith('image/')" @click="previewAttachment(file)" class="w-8 h-8 flex-shrink-0 border border-gray-200 rounded overflow-hidden cursor-pointer hover:opacity-80">
                                                        <img :src="file.preview" class="w-full h-full object-cover">
                                                    </div>
                                                    <div v-else class="w-8 h-8 flex-shrink-0 bg-red-100 border border-red-200 rounded flex items-center justify-center text-[8px] text-red-600 font-bold">PDF</div>
                                                    <div class="flex-1 min-w-0 truncate text-gray-700">{{ file.name }}</div>
                                                    <button @click="removeBatchFile(record.id, fIndex)" :disabled="batchAppealForms[record.id]?.submitted" class="flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-red-600 rounded disabled:cursor-not-allowed">
                                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="pt-2">
                                            <button @click="submitSingleBatchAppeal(record.id)" :disabled="!canSubmitBatchItem(record.id) || batchAppealForms[record.id]?.submitted" 
                                                    class="w-full px-4 py-2 bg-primary text-white text-sm hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors">
                                                {{ batchAppealForms[record.id]?.submitted ? '已提交' : '提交此运单' }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 底部操作栏 -->
                    <div class="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-between">
                        <div class="text-sm text-gray-600">
                            已提交 <span class="font-semibold text-primary">{{ submittedBatchCount }}</span> / {{ batchAppealRecords.length }} 条
                        </div>
                        <div class="flex gap-3">
                            <button @click="closeBatchAppealDialog" class="px-6 py-2 bg-white border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 rounded-lg transition-colors">关闭</button>
                            <button @click="submitAllBatchAppeals" :disabled="!canSubmitAnyBatch" 
                                    class="px-6 py-2 bg-primary text-white text-sm hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors">
                                批量提交全部
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            errorCount: 24,
            penaltyAmount: '248.00',
            showMoreFilters: false,
            showColumnPicker: false,
            activeTab: '',
            filters: {
                trackingNo: '',
                dateFrom: '',
                dateTo: '',
                errorReason: '',
                warehouse: '',
                boxCreateDate: '',
                zone: '',
                boxNo: ''
            },
            errorReasonOptions: [
                'POD信息无效，无法判定司机是否正确妥投（这类全判定错误，如POD没有门牌号也无法定位地址建筑物、POD模糊不清等）',
                'POD照片门牌号与运单实际地址门牌号不符',
                'POD照片中建筑物与Google地图中实际地址建筑物不符',
                '包裹面单拍摄模糊无法看清面单信息或没有拍摄到面单',
                '包裹妥投在邮箱中',
                '包裹妥投在公路旁或人行道旁或其他公共区域等',
                'POD照片中包裹单号与原单号不一致',
                '司机恶意错传POD，如只上传3张一样的无效POD、全是黑屏POD等之类'
            ],
            zoneOptions: ['LAX-A-001','LAX-A-002','LAX-A-003','LAX-A-004','LAX-A-005','LAX-B-006','LAX-B-007','LAX-B-008','LAX-B-009','LAX-B-010','LAX-B-011','LAX-B-012','LAX-B-013'],
            allColumns: [
                { key: 'photos', labelKey: 'colPhotos', visible: true, fixed: false },
                { key: 'errorReason', labelKey: 'colErrorReason', visible: true, fixed: false },
                { key: 'inspectDate', labelKey: 'colInspectDate', visible: true, fixed: false },
                { key: 'appealDeadline', labelKey: 'appealDeadline', visible: true, fixed: false },
                { key: 'remainingDays', labelKey: 'remainingDays', visible: true, fixed: false },
                { key: 'reviewTime', labelKey: 'reviewTime', visible: true, fixed: false },
                { key: 'appealType', labelKey: 'colAppealType', visible: true, fixed: false },
                { key: 'appealReason', labelKey: 'colAppealReason', visible: true, fixed: false },
                { key: 'appealAttachment', labelKey: 'colAppealAttachment', visible: true, fixed: false },
                { key: 'appealStatus', labelKey: 'colAppealStatus', visible: true, fixed: false },
                { key: 'driver', labelKey: 'colDriver', visible: false, fixed: false },
                { key: 'warehouse', labelKey: 'colWarehouse', visible: false, fixed: false },
                { key: 'boxCreateDate', labelKey: 'colBoxCreateDate', visible: false, fixed: false },
                { key: 'signDate', labelKey: 'colSignDate', visible: false, fixed: false },
                { key: 'zone', labelKey: 'colZone', visible: false, fixed: false },
                { key: 'boxNo', labelKey: 'colBoxNo', visible: false, fixed: false },
                { key: 'workOrderNo', labelKey: 'colWorkOrderNo', visible: false, fixed: false }
            ],
            currentPage: 1,
            pageSize: 20,
            pageSizeOptions: [10, 20, 50, 100],
            totalRecords: 24,
            showAppealDialog: false,
            showDetailDialog: false,
            showPhotoViewer: false,
            showAttachmentPreview: false,
            previewingAttachment: null,
            showAttachmentsListDialog: false,
            viewingAttachmentsRecord: null,
            viewingAttachments: [],
            showBatchAppealDialog: false,
            batchAppealRecords: [],
            batchAppealForms: {},
            expandedBatchItems: [],
            selectedRecord: {},
            viewingPhotos: [],
            currentPhotoIndex: 0,
            zoomLevel: 1,
            appealForm: {
                type: '',
                reason: '',
                files: []
            },
            appealTypes: [
                { value: 'misjudge', label: 'POD误判', description: '认为POD本身合格，申请免除罚款' },
                { value: 'modify', label: '修改错误原因', description: '认可POD不合格，但违规类型错误' },
                { value: 'reported', label: '已报备', description: '配送前已通过其他渠道向官方报备' },
                { value: 'other', label: '其他原因', description: '自定义填写说明' }
            ],
            records: (function() {
                const errors = [
                    { reason: 'POD信息无效，无法判定司机是否正确妥投（这类全判定错误，如POD没有门牌号也无法定位地址建筑物、POD模糊不清等）', amount: '2.00' },
                    { reason: 'POD照片门牌号与运单实际地址门牌号不符', amount: '2.00' },
                    { reason: 'POD照片中建筑物与Google地图中实际地址建筑物不符', amount: '2.00' },
                    { reason: '包裹面单拍摄模糊无法看清面单信息或没有拍摄到面单', amount: '2.00' },
                    { reason: '包裹妥投在邮箱中', amount: '2.00' },
                    { reason: '包裹妥投在公路旁或人行道旁或其他公共区域等', amount: '2.00' },
                    { reason: 'POD照片中包裹单号与原单号不一致', amount: '2.00' },
                    { reason: '司机恶意错传POD，如只上传3张一样的无效POD、全是黑屏POD等之类', amount: '100.00' },
                    { reason: 'POD照片缺少关键角度，未能完整展示包裹及周边环境', amount: '2.00' },
                    { reason: '包裹妥投位置与运单要求不符，未经客户同意放置其他位置', amount: '2.00' },
                    { reason: 'POD拍摄时间与系统记录妥投时间不符，存在时间异常', amount: '2.00' },
                    { reason: '包裹外包装破损但POD未清晰展示货损情况', amount: '2.00' },
                    { reason: 'POD中收件人签名与运单信息不匹配', amount: '2.00' },
                    { reason: '签收照片中无收件人或代收人手写签名', amount: '2.00' }
                ];
                const statuses = ['pending','reviewing','approved','rejected','autoApproved'];
                const warehouses = ['LAX-WH-01','LAX-WH-02','LAX-WH-03'];
                const drivers = ['DVR034921', 'DVR015306', 'DVR008500', 'DVR031891', 'DVR031696'];
                const zones = ['LAX-A-001','LAX-A-002','LAX-A-003','LAX-A-004','LAX-A-005','LAX-B-006','LAX-B-007','LAX-B-008','LAX-B-009','LAX-B-010','LAX-B-011','LAX-B-012','LAX-B-013'];
                const photos = [
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=300&fit=crop'
                ];
                const streets = ['Main St','Oak Ave','Pine St','Maple Dr','Elm Blvd','Cedar Ln','Birch Way','Walnut St','Spruce Ave','Ash Ct','Poplar Rd','Willow Pl','Hickory Blvd','Chestnut Dr','Magnolia Way','Sycamore Ln','Redwood Ave','Juniper Ct','Cypress Rd','Laurel Pl','Hazel St','Alder Dr','Beech Blvd','Dogwood Ln'];
                const appealTypes = [null, 'POD误判', '修改错误原因', '已报备'];
                const appealReasons = [null, '门牌号在照片边缘可见', '建筑物角度不同导致误判', '客户要求放置在门口已提前沟通', '客户邮箱较大可放入包裹', '单号部分遮挡但可辨认', '已提前报备特殊地址'];
                var arr = [];
                var currentId = 1;
                
                // 先生成6条待申诉记录，使用不同的错误原因
                for (var i = 0; i < 6; i++) {
                    var e;
                    var s = 'pending';
                    var hasAppeal = false;
                    var d1, d2, d3;
                    
                    // 所有待申诉记录都使用2026年2月日期
                    if (i === 5) {
                        e = errors.find(err => err.reason.includes('司机恶意错传POD'));
                    } else {
                        e = errors[i % errors.length]; // 使用不同的错误原因
                    }
                    
                    // 2026年2月份的日期（10号到15号之间）
                    d1 = 8 + i;   // 2026-02-08 到 2026-02-13
                    d2 = d1 + 2;  // 2026-02-10 到 2026-02-15
                    d3 = d2 + 1;  // 2026-02-11 到 2026-02-16
                    
                    var pCount = 2 + (i % 4);
                    var ps = [];
                    for (var j = 0; j < pCount; j++) ps.push(photos[(i + j) % photos.length]);
                    
                    // 计算申诉截止日期（查验日期+7天）
                    var year = '2026';
                    var month = '02';
                    var inspectDateStr = year + '-' + month + '-' + String(d3).padStart(2,'0');
                    var inspectDate = new Date(inspectDateStr);
                    var deadlineDate = new Date(inspectDate);
                    deadlineDate.setDate(deadlineDate.getDate() + 7); // 改为7天
                    var appealDeadline = deadlineDate.toISOString().split('T')[0];
                    
                    // 计算剩余小时数（使用2026-02-10 10:00:00作为当前时间）
                    var today = new Date('2026-02-10T10:00:00'); // 模拟当前时间
                    var remainingHours = Math.floor((deadlineDate - today) / (1000 * 60 * 60));
                    
                    // 根据i的值设置不同的剩余小时数，构造示例数据
                    if (i === 0) remainingHours = 8;       // 8小时（红色）
                    else if (i === 1) remainingHours = 20;  // 20小时（红色）
                    else if (i === 2) remainingHours = 30;  // 30小时（橙色）
                    else if (i === 3) remainingHours = 50;  // 50小时（橙色）
                    else if (i === 4) remainingHours = 80;  // 80小时（黄色）
                    else if (i === 5) remainingHours = 150; // 150小时（绿色）
                    
                    // 确保待申诉记录不逾期
                    if (remainingHours <= 0) {
                        remainingHours = 8; // 至少8小时
                    }
                    
                    arr.push({
                        id: currentId++,
                        trackingNo: 'TRK202401' + String(15 + Math.floor(i/2)).padStart(2,'0') + String(i+1).padStart(3,'0'),
                        address: (100 + i * 37) + ' ' + streets[i] + ', Los Angeles, CA 900' + String(i+1).padStart(2,'0'),
                        photos: ps,
                        errorReason: e.reason,
                        driver: drivers[i % drivers.length],
                        warehouse: warehouses[i % 3],
                        boxCreateDate: '2026-02-' + String(d1).padStart(2,'0'),
                        signDate: '2026-02-' + String(d2).padStart(2,'0'),
                        zone: zones[i % zones.length],
                        boxNo: 'BOX-2026-' + String(i+1).padStart(3,'0'),
                        penaltyAmount: e.amount,
                        inspectDate: '2026-02-' + String(d3).padStart(2,'0'),
                        appealDeadline: appealDeadline,
                        remainingHours: remainingHours,
                        reviewTime: null,
                        appealType: null,
                        appealReason: null,
                        attachmentCount: 0,
                        status: s,
                        workOrderNo: 'WO-2024-' + String(i+1).padStart(3,'0'),
                        appealCount: 0
                    });
                }
                
                // 生成其他状态的记录
                for (var i = 6; i < 24; i++) {
                    var e = errors[i % errors.length];
                    var s = statuses[i % statuses.length];
                    var hasAppeal = (s !== 'pending' && s !== 'autoApproved');
                    var d1 = 5 + (i % 15); 
                    var d2 = d1 + 2; 
                    var d3 = d2 + 1;
                    var pCount = 2 + (i % 4);
                    var ps = [];
                    for (var j = 0; j < pCount; j++) ps.push(photos[(i + j) % photos.length]);
                    
                    // 计算申诉截止日期（查验日期+7天）
                    var inspectDateStr = '2026-02-' + String(d3).padStart(2,'0');
                    var inspectDate = new Date(inspectDateStr);
                    var deadlineDate = new Date(inspectDate);
                    deadlineDate.setDate(deadlineDate.getDate() + 7); // 改为7天
                    var appealDeadline = deadlineDate.toISOString().split('T')[0];
                    
                    // 计算剩余小时数（使用2026-02-10 10:00:00作为当前时间）
                    var today = new Date('2026-02-10T10:00:00'); // 模拟当前时间
                    var remainingHours = Math.floor((deadlineDate - today) / (1000 * 60 * 60));
                    
                    // 如果已逾期（remainingHours <= 0），pending状态自动转为超期自动认可
                    if (s === 'pending' && remainingHours <= 0) {
                        s = 'autoApproved';
                        hasAppeal = false;
                    }
                    
                    // 确保remainingHours不大于7天（168小时）
                    if (s === 'pending' && remainingHours > 168) {
                        // 调整查验日期，使remainingHours等于168
                        var excessHours = remainingHours - 168;
                        inspectDate.setHours(inspectDate.getHours() - excessHours);
                        deadlineDate = new Date(inspectDate);
                        deadlineDate.setDate(deadlineDate.getDate() + 7);
                        appealDeadline = deadlineDate.toISOString().split('T')[0];
                        remainingHours = 168;
                    }
                    
                    // 计算是否已申诉（pending状态表示未申诉，autoApproved表示超时自动认可也算未申诉）
                    hasAppeal = (s !== 'pending' && s !== 'autoApproved');
                    
                    // 审核时间（申诉通过/失败状态）
                    var reviewTime = null;
                    if (s === 'approved' || s === 'rejected') {
                        var reviewDate = new Date(inspectDate);
                        reviewDate.setDate(reviewDate.getDate() + 3 + (i % 3)); // 查验后3-5天审核
                        reviewTime = reviewDate.toISOString().split('T')[0];
                    }
                    
                    arr.push({
                        id: currentId++,
                        trackingNo: 'TRK202602' + String(15 + Math.floor(i/3)).padStart(2,'0') + String(i+1).padStart(3,'0'),
                        address: (100 + i * 37) + ' ' + streets[i] + ', Los Angeles, CA 900' + String(i+1).padStart(2,'0'),
                        photos: ps,
                        errorReason: e.reason,
                        driver: drivers[i % drivers.length],
                        warehouse: warehouses[i % 3],
                        boxCreateDate: '2026-02-' + String(d1).padStart(2,'0'),
                        signDate: '2026-02-' + String(d2).padStart(2,'0'),
                        zone: zones[i % zones.length],
                        boxNo: 'BOX-2026-' + String(i+1).padStart(3,'0'),
                        penaltyAmount: e.amount,
                        inspectDate: '2026-02-' + String(d3).padStart(2,'0'),
                        appealDeadline: appealDeadline,
                        remainingHours: remainingHours,
                        reviewTime: reviewTime,
                        appealType: hasAppeal ? appealTypes[1 + (i % 3)] : null,
                        appealReason: hasAppeal ? appealReasons[1 + (i % appealReasons.length - 1)] : null,
                        attachmentCount: hasAppeal ? (1 + i % 4) : 0,
                        status: s,
                        workOrderNo: 'WO-2026-' + String(i+1).padStart(3,'0'),
                        appealCount: hasAppeal ? (s === 'rejected' ? ((i % 2 === 0) ? 1 : 2) : 1) : 0 // 申诉次数，rejected状态有的1次有的2次
                    });
                }
                return arr;
            })()
        }
    },
    computed: {
        currentPhoto() {
            return this.viewingPhotos[this.currentPhotoIndex];
        },
        canSubmit() {
            return this.appealForm.type && this.appealForm.reason;
        },
        statusCounts() {
            const counts = { pending: 0, reviewing: 0, approved: 0, rejected: 0, autoApproved: 0 };
            this.records.forEach(r => { if (counts[r.status] !== undefined) counts[r.status]++; });
            return counts;
        },
        totalPenalty() {
            return this.records.filter(r => r.status !== 'approved').reduce((sum, r) => sum + parseFloat(r.penaltyAmount || 0), 0).toFixed(2);
        },
        filteredRecords() {
            let list = this.records;
            if (this.activeTab) {
                list = list.filter(r => r.status === this.activeTab);
            }
            return list;
        },
        filteredPenalty() {
            return this.filteredRecords.filter(r => r.status !== 'approved').reduce((sum, r) => sum + parseFloat(r.penaltyAmount || 0), 0).toFixed(2);
        },
        totalPages() {
            return Math.max(1, Math.ceil(this.filteredRecords.length / this.pageSize));
        },
        paginatedRecords() {
            const start = (this.currentPage - 1) * this.pageSize;
            return this.filteredRecords.slice(start, start + this.pageSize);
        },
        submittedBatchCount() {
            return Object.values(this.batchAppealForms).filter(f => f.submitted).length;
        },
        canSubmitAnyBatch() {
            return this.batchAppealRecords.some(r => {
                const form = this.batchAppealForms[r.id];
                return form && form.type && form.reason && !form.submitted;
            });
        }
    },
    watch: {
        activeTab() { this.currentPage = 1; },
        pageSize() { this.currentPage = 1; }
    },
    methods: {
        t(key) {
            return i18n[this.lang || 'en'][key] || key;
        },
        getStatusClass(status) {
            const classes = {
                pending: 'bg-gray-100 text-gray-700 border border-gray-300',
                reviewing: 'bg-orange-100 text-orange-700 border border-orange-300',
                approved: 'bg-green-100 text-green-700 border border-green-300',
                rejected: 'bg-red-100 text-red-700 border border-red-300',
                autoApproved: 'bg-blue-100 text-blue-700 border border-blue-300'
            };
            return classes[status];
        },
        getStatusLabel(status) {
            const map = {
                pending: 'pending',
                reviewing: 'reviewing',
                approved: 'approved',
                rejected: 'rejected',
                autoApproved: 'autoApproved'
            };
            return this.t(map[status] || status);
        },
        isColVisible(key) {
            const col = this.allColumns.find(c => c.key === key);
            return col ? col.visible : true;
        },
        openAppealDialog(record) {
            this.selectedRecord = record;
            this.appealForm = { type: '', reason: '', files: [] };
            this.showAppealDialog = true;
        },
        viewDetail(record) {
            this.selectedRecord = record;
            this.showDetailDialog = true;
        },
        viewAppeal(record) {
            alert('查看申诉详情：' + record.trackingNo);
        },
        viewPhotos(photos, index) {
            this.viewingPhotos = photos;
            this.currentPhotoIndex = index;
            this.zoomLevel = 1;
            this.showPhotoViewer = true;
        },
        prevPhoto() {
            this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.viewingPhotos.length) % this.viewingPhotos.length;
            this.zoomLevel = 1;
        },
        nextPhoto() {
            this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.viewingPhotos.length;
            this.zoomLevel = 1;
        },
        zoomIn() {
            this.zoomLevel = Math.min(this.zoomLevel * 1.2, 5);
        },
        zoomOut() {
            this.zoomLevel = Math.max(this.zoomLevel / 1.2, 0.5);
        },
        resetZoom() {
            this.zoomLevel = 1;
        },
        onWheelZoom(e) {
            e.preventDefault();
            if (e.deltaY < 0) {
                this.zoomIn();
            } else {
                this.zoomOut();
            }
        },
        handleFileUpload(e) {
            const files = Array.from(e.target.files);
            files.forEach(file => {
                // 为图片文件创建预览URL
                if (file.type.startsWith('image/')) {
                    file.preview = URL.createObjectURL(file);
                }
                this.appealForm.files.push(file);
            });
            // 清空input，允许重复选择同一文件
            e.target.value = '';
        },
        removeFile(index) {
            const file = this.appealForm.files[index];
            // 释放预览URL
            if (file.preview) {
                URL.revokeObjectURL(file.preview);
            }
            this.appealForm.files.splice(index, 1);
        },
        previewAttachment(file) {
            this.previewingAttachment = file;
            this.showAttachmentPreview = true;
        },
        viewAttachments(record) {
            this.viewingAttachmentsRecord = record;
            // 生成模拟的附件数据
            this.viewingAttachments = [];
            for (let i = 0; i < record.attachmentCount; i++) {
                // 随机生成图片或PDF
                const isImage = i < record.attachmentCount - 1; // 最后一个是PDF，其他是图片
                if (isImage) {
                    this.viewingAttachments.push({
                        type: 'image',
                        name: `申诉附件_${i + 1}.jpg`,
                        url: record.photos[i % record.photos.length], // 复用POD照片作为示例
                        preview: record.photos[i % record.photos.length],
                        size: Math.floor(Math.random() * 500000) + 100000
                    });
                } else {
                    this.viewingAttachments.push({
                        type: 'pdf',
                        name: `申诉说明_${i + 1}.pdf`,
                        url: '#',
                        size: Math.floor(Math.random() * 1000000) + 500000
                    });
                }
            }
            this.showAttachmentsListDialog = true;
        },
        formatFileSize(bytes) {
            if (!bytes) return '0 B';
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        },
        formatRemainingTime(hours) {
            if (hours <= 0) return this.t('expired');
            const days = Math.floor(hours / 24);
            const remainingHours = hours % 24;
            if (days > 0 && remainingHours > 0) {
                return days + this.t('days') + remainingHours + this.t('hours');
            } else if (days > 0) {
                return days + this.t('days');
            } else {
                return remainingHours + this.t('hours');
            }
        },
        submitAppeal() {
            // 模拟提交申诉
            if (this.selectedRecord.status === 'rejected') {
                // 再次申诉，增加申诉次数
                this.selectedRecord.appealCount = (this.selectedRecord.appealCount || 0) + 1;
                alert('再次申诉已提交（第' + this.selectedRecord.appealCount + '次申诉）');
            } else {
                alert('申诉已提交');
            }
            this.showAppealDialog = false;
        },
        handleQuery() {},
        handleReset() {
            this.filters = { trackingNo: '', dateFrom: this.getDefaultDateFrom(), dateTo: this.getDefaultDateTo(), errorReason: '', warehouse: '', boxCreateDate: '', zone: '', boxNo: '' };
            this.activeTab = '';
        },
        createExportTask() {
            // 创建异步导出任务
            // 实际应用中应该调用API: POST /api/export/create
            const taskData = {
                module: 'pod-non-compliance',
                filters: this.filters,
                columns: this.allColumns.filter(c => c.visible).map(c => c.key),
                fileName: `POD不合格记录_${new Date().toISOString().slice(0, 10)}`
            };
            
            // 模拟创建任务
            alert(this.t('exportCreated'));
            
            // 通知父组件打开下载中心
            this.$parent.$parent.showDownloadCenter = true;
            
            // 模拟添加新任务到下载中心
            const newTask = {
                id: Date.now(),
                taskId: 'EXPORT_' + Date.now(),
                fileName: taskData.fileName + '.xlsx',
                status: 'pending',
                progress: 0,
                totalRecords: this.filteredRecords.length,
                processedRecords: 0,
                createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
                completedAt: null,
                expiredAt: null
            };
            
            this.$parent.$parent.exportTasks.unshift(newTask);
            
            // 1秒后开始处理
            setTimeout(() => {
                newTask.status = 'processing';
            }, 1000);
        },
        openBatchAppealDialog() {
            // 获取所有待申诉的运单（固定使用pending状态，不受当前tab影响）
            this.batchAppealRecords = this.records.filter(r => r.status === 'pending');
            if (this.batchAppealRecords.length === 0) {
                alert('当前没有待申诉的运单');
                return;
            }
            // 初始化每个运单的表单
            this.batchAppealForms = {};
            this.batchAppealRecords.forEach(r => {
                this.batchAppealForms[r.id] = { type: '', reason: '', files: [], submitted: false };
            });
            // 默认全部展开
            this.expandedBatchItems = this.batchAppealRecords.map(r => r.id);
            this.showBatchAppealDialog = true;
        },
        closeBatchAppealDialog() {
            this.showBatchAppealDialog = false;
            this.batchAppealRecords = [];
            this.batchAppealForms = {};
            this.expandedBatchItems = [];
        },
        toggleBatchItem(id) {
            const index = this.expandedBatchItems.indexOf(id);
            if (index > -1) {
                this.expandedBatchItems.splice(index, 1);
            } else {
                this.expandedBatchItems.push(id);
            }
        },
        handleBatchFileUpload(recordId, e) {
            const files = Array.from(e.target.files);
            if (!this.batchAppealForms[recordId].files) {
                this.batchAppealForms[recordId].files = [];
            }
            files.forEach(file => {
                // 为图片文件创建预览URL
                if (file.type.startsWith('image/')) {
                    file.preview = URL.createObjectURL(file);
                }
                this.batchAppealForms[recordId].files.push(file);
            });
            // 清空input
            e.target.value = '';
        },
        removeBatchFile(recordId, index) {
            const file = this.batchAppealForms[recordId].files[index];
            // 释放预览URL
            if (file.preview) {
                URL.revokeObjectURL(file.preview);
            }
            this.batchAppealForms[recordId].files.splice(index, 1);
        },
        canSubmitBatchItem(recordId) {
            const form = this.batchAppealForms[recordId];
            return form && form.type && form.reason;
        },
        submitSingleBatchAppeal(recordId) {
            const form = this.batchAppealForms[recordId];
            if (!this.canSubmitBatchItem(recordId)) return;
            
            form.submitted = true;
            alert('运单 ' + this.batchAppealRecords.find(r => r.id === recordId).trackingNo + ' 申诉已提交');
            
            // 如果还有未提交的，自动展开下一个
            const nextUnsubmitted = this.batchAppealRecords.find(r => !this.batchAppealForms[r.id].submitted);
            if (nextUnsubmitted) {
                this.expandedBatchItems = [nextUnsubmitted.id];
            }
        },
        submitAllBatchAppeals() {
            let submittedCount = 0;
            this.batchAppealRecords.forEach(r => {
                const form = this.batchAppealForms[r.id];
                if (form && form.type && form.reason && !form.submitted) {
                    form.submitted = true;
                    submittedCount++;
                }
            });
            
            if (submittedCount > 0) {
                alert('批量提交成功，共提交 ' + submittedCount + ' 条申诉');
            } else {
                alert('没有可提交的申诉（请填写完整信息或已全部提交）');
            }
        },
        getDefaultDateFrom() {
            const d = new Date(); d.setDate(d.getDate() - 30);
            return d.toISOString().split('T')[0];
        },
        getDefaultDateTo() {
            return new Date().toISOString().split('T')[0];
        }
    },
    mounted() {
        this.filters.dateFrom = this.getDefaultDateFrom();
        this.filters.dateTo = this.getDefaultDateTo();
    }
};

// 主应用
createApp({
    components: {
        LoginPage,
        MainLayout
    },
    data() {
        return {
            currentView: 'MainLayout',
            pendingAppealCount: 5 // 模拟待申诉数量，实际应从后端获取
        }
    },
    methods: {
        navigate(view) {
            const viewMap = {
                'login': 'LoginPage',
                'main': 'MainLayout'
            };
            this.currentView = viewMap[view] || 'LoginPage';
            
            // 如果是登录到主页面，检查待申诉数量
            if (view === 'main' && this.pendingAppealCount > 0) {
                // 延迟显示提醒，让页面先加载
                setTimeout(() => {
                    const mainLayout = this.$refs.mainLayout;
                    if (mainLayout) {
                        mainLayout.pendingCount = this.pendingAppealCount;
                        mainLayout.showPendingAlert = true;
                    }
                }, 500);
            }
        }
    }
}).mount('#app');
